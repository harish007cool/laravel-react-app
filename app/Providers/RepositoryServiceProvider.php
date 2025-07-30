<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Repositories\ApplictionFormForSubsidyClaim\ApplictionFormForSubsidyClaimUnderUpupYInterFase;
use App\Repositories\ApplictionFormForSubsidyClaim\ApplictionFormForSubsidyClaimUnderUpupYRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(ApplictionFormForSubsidyClaimUnderUpupYInterFase::class, ApplictionFormForSubsidyClaimUnderUpupYRepository::class);
    }

    public function boot()
    {
       
    }
}
