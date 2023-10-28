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
 function SearchFunction(x) {
    x.style.background = "white";
  }
  function restSearch(x) {
    x.style.background = "transperent";
  }
  function validateForm() {
   
    if (isEmpty(document.getElementById('data_mail').value.trim())) {
        alert('EMAIL is required!');
        return false;
        }
        if (!validateEmail(document.getElementById('data_mail').value.trim())) {
        alert('EMAIL must be a valid email address!');
        return false;
        }
        return true;
        }

        function isEmpty(str)
         {
             return (str.length === 0 || !str.trim()); 
        }
        function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,15}(?:\.[a-z]{2})?)$/i;
        return isEmpty(email) || re.test(email);
        }