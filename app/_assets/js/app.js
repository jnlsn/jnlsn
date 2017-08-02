//= require jquery/dist/jquery
//= require what-input/dist/what-input
//= require foundation-sites/dist/js/foundation
//= require jquery-youtube-background/src/jquery.youtubebackground

$(document).ready(function(){
  $(document).foundation();
  
  $('.home-splash').YTPlayer({
    fitToBackground: true,
    videoId: 'bsXqCi4zp-s'
  });
});
