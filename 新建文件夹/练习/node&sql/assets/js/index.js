$(function () {
    // 以事件委托方式为删除注册点击事件
    $('#tbody').on('click', 'a:last-child', function () {
        // 让用户再次确认
        if (!confirm('确定删除吗?')) {
            return
        } else {
            // 获取当前id
            let id = $(this).attr('data-id');
            // 保留this
            let _this = this;
            // 发送请求
            $.ajax({
                type: 'get',
                url: '/removeHero',
                data: {
                    id
                },
                // 判断服务器返回来的信息
                success: function (res) {
                    if (res.code === 200) {
                        $(_this).parents('tr').remove()
                        alert(res.msg)
                        location.href = 'http://127.0.0.1:3000/index';
                    } else {
                        alert(res.msg)
                    }
                }
            })
        }
    })
})