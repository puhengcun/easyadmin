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
                    {type: 'checkbox'},
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