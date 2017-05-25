$(document).ready(function () {
  var so_a = $('.sosp').html();
  var so_b = $('.gia').html();


  var a = parseInt(so_a);

  $('.cong').click(function () {
    a++;
    $('.sosp').html(a)
    console.log(a);
  })
  $('.tru').click(function () {
    if (a>0) {
      a--;
      $('.sosp').html(a)
    }
      console.log(a);
  })

})
