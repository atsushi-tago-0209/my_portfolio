// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

// const channels = require.context('.', true, /_channel\.js$/)
// channels.keys().forEach(channels)

// var headerHeight = $('.header').outerHeight();
// $('a[href^="#"]').click(function() {
//     var href= $(this).attr("href");
//     var target = $(href);
//     var position = target.offset().top - headerHeight;
//     $('body,html').stop().animate({scrollTop:position}, 500);   
//     return false;
// });

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});