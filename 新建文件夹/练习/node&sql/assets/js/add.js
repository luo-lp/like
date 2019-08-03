$(function () {
    // 找到按钮注册点击事件
    $('#sub').on('click', function () {
        // 非空判断
        if ($('#myform input[name=name]').val().trim().length === 0) {
            alert('用户名不能为空')
            return
        } else {
            // 把表单数据存到data里面
            let data = $('#myform').serialize();
            // 发送请求
            $.ajax({
                type:'post',
                url:'/addHero',
                data,
                success:function(res){
                    // 判定返回的code
                    if(res.code===200){
                        alert(res.msg);
                        location.href='/index'
                    }else{
                        alert('失败')
                    }
                }
            })
        };
    })
})