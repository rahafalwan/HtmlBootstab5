$(document).ready(function(){
    $("#sport").click(function(){
       $('html, body').animate({
          scrollTop: $("#sport-content").offset().top
       }, 1000);
    });
    $("#events").click(function(){
       $('html, body').animate({
          scrollTop: $("#events-content").offset().top
       }, 1000);
    });
    $("#health").click(function(){
       $('html, body').animate({
          scrollTop: $("#health-content").offset().top
       }, 1000);
    });
    $("#lifestyle").click(function(){
       $('html, body').animate({
          scrollTop: $("#lifestyle-content").offset().top
       }, 1000);
    });
    $(window).scroll(function () {
       if ($(window).scrollTop() >= 50) {
           $('.navbar').css('background', '#404242');
           $('.nav-link').css('color', '#ffffff');
           $('.navbar-brand').css('color', '#eeeeee');
           
       }
       else {
           $('.navbar').css('background', 'transparent');
           $('.nav-link').css('color', '#ced4da');
           $('.navbar-brand').css('color', '#ced4dac');
           
       }
   });
 });