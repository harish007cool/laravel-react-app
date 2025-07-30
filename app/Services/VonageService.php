<?php

namespace App\Services;

use Vonage\Client\Credentials\Basic;
use OpenTok\OpenTok;

class VonageService
{
    protected $opentok;

    public function __construct()
    {
        $credentials = new Basic(env('VONAGE_API_KEY'), env('VONAGE_API_SECRET'));
        $this->opentok = new OpenTok(env('VONAGE_API_KEY'), env('VONAGE_API_SECRET'));
    }

    public function createSession()
    {
        return $this->opentok->createSession();
    }

    public function generateToken($sessionId)
    {
        return $this->opentok->generateToken($sessionId);
    }
}
