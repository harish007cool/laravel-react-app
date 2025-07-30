<?php

namespace App\Repositories\Eloquent;

use App\Models\User;
use App\Repositories\ApplictionFormForSubsidyClaim\ApplictionFormForSubsidyClaimUnderUpupYInterFase;

class ApplictionFormForSubsidyClaimUnderUpupYRepository implements ApplictionFormForSubsidyClaimUnderUpupYInterFase
{
    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function all()
    {
        return $this->model->all();
    }

}
