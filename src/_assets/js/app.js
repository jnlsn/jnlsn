import 'jquery';
import 'what-input';
import 'foundation-sites';
import 'slick-carousel';

$(document).ready(function(){
  $(document).foundation();

  // Google analytics
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-105255174-1', 'auto');
  ga('send', 'pageview');

  // Disqus Comments
  var d = document, s = d.createElement('script');
  s.src = 'https://jayarnielsen.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);

  // Home Page Hero Slider
  $('.hero-tabs-content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".hero-bg",
  }).on( 'beforeChange', function( e, slick, currentSlide, nextSlide ) {
    var nthTab = nextSlide + 1;
    $('.hero-tabs-nav .cell').removeClass('active');
    $('.hero-tabs-nav .cell:nth-child(' + nthTab + ')').addClass('active');
  });

  $('.hero-bg').slick({
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    asNavFor: ".hero-tabs-content",
  });

  $('.hero').on('click', '.tab', function() {
    $('.hero-tabs-content, .hero-bg').slick(
      'slickGoTo',
      $(this).data('goto-slide')
    );
  });
});
