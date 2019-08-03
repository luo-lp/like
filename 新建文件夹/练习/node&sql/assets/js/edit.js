$(function () {
    $('#sub').on('click', function () {
        // 非空判断
        if ($('#form input[name=name]').val().trim().length === 0) {
            alert('用户名不能为空')
            return
        } else {
            // 把表单数据存到data里面
            let data = $('#form').serialize();
            // 发送请求
            $.ajax({
                type:'post',
                url:'/revampHero',
                data,
                success:function(res){
                    // 判定返回的code
                    if(res.code===200){
                        alert(res.msg);
                        location.href='/index'
                    }else{
                        alert(res.msg);
                    }
                }
            })
        };
    })
})