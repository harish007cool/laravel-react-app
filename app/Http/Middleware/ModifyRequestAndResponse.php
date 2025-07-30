<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Config;

class ModifyRequestAndResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Modify the request data before it reaches the controller
        $secretKey = config('constants.CRYPTOJS_RAWKEY');
        $iv = config('constants.CRYPTOJS_IV'); // 16 bytes
        if($request->input('payload')){
            $encryptedPayload = $request->input('payload');

            if ($encryptedPayload) {
                $key = str_pad($secretKey, 32, "\0", STR_PAD_RIGHT); // Null byte padding
                $encryptedData = base64_decode($encryptedPayload);
                $decrypted = openssl_decrypt(
                    $encryptedData,
                    'AES-256-CBC',
                    $key,
                    OPENSSL_RAW_DATA,
                    $iv
                );
        
                Log::debug('Decrypted Value:', ['value' => $decrypted]);
        
                if (!$decrypted) {
                    Log::error('OpenSSL Error:' . openssl_error_string());
                    throw new \Exception('Decryption failed');
                }
        
                $formData = json_decode($decrypted, true);
                if (json_last_error() !== JSON_ERROR_NONE) {
                    throw new \Exception('Invalid JSON data');
                }
        
                if ($request->isJson()) {
                    $data = $formData;
                    $data['middleware_modified'] = true;
                    $request->replace($data);
                }
        
                // Example: Redirect if a certain condition is met
                if (isset($formData['redirect_condition']) && $formData['redirect_condition'] === true) {
                    return redirect()->route('dashboard');
                }
            }
        
        }
        
        // Pass the request to the next middleware or controller
        $response = $next($request);

        // Modify the response before it's sent to the client
        if ($response->headers->get('Content-Type') === 'application/json') {
            $content = json_decode($response->getContent(), true);
            
            if($content){
                $content['modified_by_middleware'] = true;
                $content['status'] = 200;
                $response->setContent(json_encode($content));
            }
            else{
                $content['modified_by_middleware'] = true;
                $content['status'] = 404;
                $response->setContent(json_encode($content));
            }
           
        }

        return $response;
    }

}
