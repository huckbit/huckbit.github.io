(function(){
  $('.hamburger').on('click', function(){

    $(this).toggleClass('is-active');
    $('.side-nav').toggleClass('side-nav--show');
    $('.main').toggleClass('main--show');
  })

}());


/*
* Smooth Scrolling
* Source: https://css-tricks.com/snippets/jquery/smooth-scrolling/
* Description: Performs a smooth page scroll to an anchor on the same page.
*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);

      return false;
    }
  }
});
});



/*
  DISQUIS CONFIGURATION SECTION
  ----------------------------------------------------------------------
*/

/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'huckbit'; // required: replace example with your forum shortname
/* * * DON'T EDIT BELOW THIS LINE * * */
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
