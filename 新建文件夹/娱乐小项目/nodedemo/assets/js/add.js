$(function () {
    $('#sub').on('click', function () {
        let data = $('#myform').serialize();
        $.ajax({
            type: 'post',
            url: 'http://127.0.0.1:8000/addHero',
            data,
            success: function (res) {
                if (res.code == 200) {
                    alert(res.msg);
                    location.href="http://127.0.0.1:8000/index";
                }
            }
        })
    })
})