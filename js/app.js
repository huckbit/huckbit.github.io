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

(function(){
  /* The function shows the back-to-top icon when scrolls more than 500px */
  var icon = $('.go-up');
  icon.hide();

  setInterval(function(){
    $(window).scroll(function() {
      if ($(window).scrollTop() > 1000) {
        icon.fadeIn('ease-in');
      } else {
        icon.fadeOut('ease-out');
      }
    });
  }, 2000);


  //smooth Scrolling
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


/*
  ANALYTICS CONFIGURATION SECTION
  ----------------------------------------------------------------------
*/

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-83611183-1', 'auto');
  ga('send', 'pageview');


/*
  TWITTER SHARE CONFIGURATION SECTION
  ----------------------------------------------------------------------
*/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


/*
  GOOGLE+ SHARE CONFIGURATION SECTION
  ----------------------------------------------------------------------
*/
window.___gcfg = {lang: 'en-GB'};

 (function() {
   var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
   po.src = 'https://apis.google.com/js/platform.js';
   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
 })();
