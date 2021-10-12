<?php

namespace app\admin\controller\user;

use app\common\controller\AdminController;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use app\admin\model\UserInformation;
use think\App;

/**
 * @ControllerAnnotation(title="user_information")
 */
class Information extends AdminController
{

    use \app\admin\traits\Curd;

    public function __construct(App $app)
    {
        parent::__construct($app);

        $this->model = new UserInformation();
        
    }

}