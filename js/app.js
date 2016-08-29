(function(){
  $('.hamburger').on('click', function(){

    $(this).toggleClass('is-active');
    $('.side-nav').toggleClass('side-nav--show');
    $('.main').toggleClass('main--show');
  })

}());
