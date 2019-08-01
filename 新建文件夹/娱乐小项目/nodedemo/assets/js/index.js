$(function () {
    $('#tbody').on('click', 'a:last-child', function () {
        let id = $(this).attr('data-id')
        let _this = this;
        if (!confirm('确定删除吗')) {
            return
        } else {
            $(_this).parents('tr').remove();
            $.ajax({
                type: 'get',
                url: '/removeHero',
                data: {
                    id
                },
                success: function (res) {
                    if (res.code == 200) {
                        console.log(res.msg);
                        location.href="http://127.0.0.1:8000/index";
                    }
                }
            })
        }
    })
})
