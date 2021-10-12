define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'infor.information/index',
        add_url: 'infor.information/add',
        edit_url: 'infor.information/edit',
        delete_url: 'infor.information/delete',
        export_url: 'infor.information/export',
        modify_url: 'infor.information/modify',
    };

    var Controller = {

        index: function () {
            ea.table.render({
                init: init,
                cols: [[
                    {type: 'checkbox'},
                    {field: 'id', title: 'id'},
                    {field: 'name', title: '姓名'},
                    {field: 'sex', title: '性别'},
                    {field: 'age', title: '年龄'},
                    {field: 'province', title: '省份'},
                    {field: 'university', title: '大学'},
                    {field: 'username', title: '用户名'},
                    {field: 'password', title: '密码'},
                    {width: 250, title: '操作', templet: ea.table.tool},
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