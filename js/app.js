(function(){
  $('.hamburger').on('click', function(){

    $(this).toggleClass('is-active');
    $('.side-nav').toggleClass('side-nav--show');
    $('.main').toggleClass('main--show');
  })

}());

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
