<?php

namespace app\admin\controller\infor;

use app\common\controller\AdminController;
use app\admin\model\InforInformation;
use app\admin\traits\Curd;
use EasyAdmin\annotation\ControllerAnnotation;
use EasyAdmin\annotation\NodeAnotation;
use think\App;
use think\facade\Db;
use think\facade\View;

/**
 * @ControllerAnnotation(title="infor_information")
 */
class Information extends AdminController
{

    use Curd;

    public function __construct(App $app)
    {
        parent::__construct($app);

        $this->model = new InforInformation();
        
    }

    /**
     * @NodeAnotation(title="测试")
     */
    public function test()
    {
//        if ($this->request->isAjax()) {
//            list($page, $limit, $where) = $this->buildTableParames();
//            $count = $this->model
//                ->where($where)
//                ->count();
//            $list = $this->model
//                ->where($where)
//                ->page($page, $limit)
//                ->order($this->sort)
//                ->select();
//            $data = [
//                'code' => 0,
//                'msg' => '',
//                'count' => $count,
//                'data' => $list,
//            ];
//            return json($data);
//       }

        $data=InforInformation::find(5);
        return View::fetch('test',[
            'data'=>$data
        ]);
    }
    
}