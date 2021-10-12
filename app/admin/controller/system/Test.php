<?php

namespace app\admin\controller\system;

use app\admin\model\SystemInformation;
use app\admin\traits\Curd;
use app\common\controller\AdminController;
use think\App;

class Test extends AdminController
{

    use Curd;

    protected $relationSearch = true;

    public function __construct(App $app)
    {
        parent::__construct($app);
        $this->model = new SystemInformation();
    }

    /**
     * @NodeAnotation(title="测试菜单")
     */
    public function index()
    {
        return $this->fetch();
    }
}