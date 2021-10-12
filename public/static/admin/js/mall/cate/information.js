define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'mall.cate.information/index',
        add_url: 'mall.cate.information/add',
        edit_url: 'mall.cate.information/edit',
        delete_url: 'mall.cate.information/delete',
        export_url: 'mall.cate.information/export',
        modify_url: 'mall.cate.information/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},                    {field: 'id', title: 'id'},                    {field: 'name', title: 'name'},                    {field: 'sex', title: 'sex'},                    {field: 'age', title: 'age'},                    {field: 'province', title: 'province'},                    {field: 'university', title: 'university'},                    {field: 'username', title: 'username'},                    {field: 'password', title: 'password'},                    {width: 250, title: '操作', templet: ea.table.tool},
                ]],
            });

            ea.listen();
        },
        add: function () {
            ea.listen();
        },
        edit: function () {
            ea.listen();
        },
    };
    return Controller;
});