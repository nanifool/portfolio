
window.onload = function () {

  $(".menu li").click(function(e) {
    var id = $(this).attr('id')
    $(".main section").hide()
    $("." + id).show()
  })

}