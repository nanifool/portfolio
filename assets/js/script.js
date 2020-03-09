
window.onload = function () {

  $(".menu li").click(function(e) {
    var id = $(this).attr('id')
    $(".main section").hide()
    $("." + id).show()
  })

  $(".icon-menu, .close").on('click', function(e) {
    $('.sidebar').toggleClass('active')
  })

  $('.skills-tabs li').on('click', function() {
    $('.skills-tabs li').removeClass('active')
    $(this).addClass("active")
    var id = $(this).attr('id')
    $('.skills-descriptions').addClass('hide')
    $('.'+id).removeClass('hide')
  })

}