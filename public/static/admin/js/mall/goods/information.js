define(["jquery", "easy-admin"], function ($, ea) {

    var init = {
        table_elem: '#currentTable',
        table_render_id: 'currentTableRenderId',
        index_url: 'mall.goods.information/index',
        add_url: 'mall.goods.information/add',
        edit_url: 'mall.goods.information/edit',
        delete_url: 'mall.goods.information/delete',
        export_url: 'mall.goods.information/export',
        modify_url: 'mall.goods.information/modify',
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