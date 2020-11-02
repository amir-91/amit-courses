
$(document).ready(function () {

    $(window).scroll(function() {
      var height = $(window).scrollTop();

      if (height > 400) {
        $('#myBtn').css('display','block')
      } else {
        $('#myBtn').css('display','none')
      }

      $('#myBtn').click(function(){
        scrollTo (0,0);
      })
});

$('#btnBar').click (function(){
  $('#menu').css('display','none');
  $('#menuBar a').fadeIn(800);
  $('#btnBar .fa-times-circle').css('display','block');
  $('#btnBar .fa-bars ').css('display','none');
})

$('.fa-times-circle').click ( function() {
  $('#menu').css('display','block');
  $('#menuBar a').css('display','none');
  $('#btnBar .fa-times-circle').css('display','none');
  $('#btnBar .fa-bars ').css('display','block');
})



$(".photo").on('mouseenter', function(){
$(this).css('border', '1px solid white'); 
$(this).animate({
  opacity:'1',
});
});
$(".photo").on('mouseleave', function(){
$(this).animate({
  opacity:'0.9',
  border:'0'
});
    

})

/*$(".far").on('mouseenter', function(){
  $(this).animate({
    opacity:'0.7'
  });
  });
  $(".far").on('mouseleave', function(){
  $(this).animate({
    opacity:'1'
  });*/

})





    var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
  




  




