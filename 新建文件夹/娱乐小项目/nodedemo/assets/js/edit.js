$(function () {
  let search = location.search
  search = search.slice(1)
  search = search.split('&')
  let id = {}
  search.forEach((e, i) => {
    let temp = e.split('=')
    id[temp[0]] = temp[1]
  });
  $.ajax({
    type: "get",
    url: "/getHeroById",
    data: id,
    success: function (res) {
      if (res.code == 200) {
        $('#name').val(res.data.name)
        $('#id').val(res.data.id)
        $('#headSrc').val(res.data.img)
        $('#nv').prop('checked', res.data.gender == '女')
      }
    }
  });
  $('#sub').on('click', function () {
    let data = $('#form').serialize();
    $.ajax({
      type: 'post',
      url: '/editHeroById',
      data,
      success: function (res) {
        console.log(1);
        if (res.code == 200) {
          alert(res.msg);
          location.href = 'http://127.0.0.1:8000/index';}
        }
      })
    })
  
})