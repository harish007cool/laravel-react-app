<?php

namespace App\Http\Controllers;

use App\Services\VonageService;
use Illuminate\Http\Request;

class VideoCallController extends Controller
{
    protected $vonageService;

    public function __construct(VonageService $vonageService)
    {
        $this->vonageService = $vonageService;
    }

    public function createSession()
    {
        $session = $this->vonageService->createSession();
        return response()->json([
            'sessionId' => $session->getSessionId(),
        ]);
    }

    public function generateToken(Request $request)
    {
        $sessionId = $request->input('sessionId');
        $token = $this->vonageService->generateToken($sessionId);
        return response()->json([
            'token' => $token,
        ]);
    }
}
