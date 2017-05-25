$(document).ready(function () {
  $('.tinh').click(function(){
    var so_a=$('#soa').val();
    var so_b=$('#sob').val();//get giá trị
    var phep_tinh=$('#pheptinh').val();
    if (so_a == ''){
      confirm('Vui lòng Nhập dữ Liệu cho a');
      soa.focus();
      return false;
    }
    if (so_b=='') {
      confirm(' Vui lòng nhập dữ liệu cho b')
      sob.focus();
      return false;
    }
    if (phep_tinh=='') {
      confirm('Vui lòng nhập phép tính(+,-,*,/)')
      pheptinh.focus();
      return false;
    }
    if (isNaN(so_a) || isNaN(so_b)) {
      confirm('Vui Lòng nhập số');
      return false;
    }
    if ( phep_tinh != '+' && phep_tinh !='-' && phep_tinh!='*'&& phep_tinh != '/'){
      confirm('Các Phép tính là +,-,*,/')
      $('#pheptinh').val('');
      pheptinh.focus();
      return false;
    }
    var kq=0;
    var a=parseInt(so_a);
    var b=parseInt(so_b);
    if (phep_tinh == '+') {
      kq=a+b
    }
    if (phep_tinh == '-') {
      kq=a-b;
    }
    if (phep_tinh == '*') {
      kq=a*b;
    }
    if (phep_tinh == '/') {
      if (so_b == 0) {
        alert('Số b khác 0');
        return false;
      }
      kq=a/b;
    }
    $('#kq').val(kq);//set giá trị
  })
})
