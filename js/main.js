(function($) {
    'use strict';
    
    //NICE SCROLL
    $("html").niceScroll({
        cursorcolor: "#f74d65",
        scrollspeed: "100",
        cursorborder: "1px solid #f74d65",
        horizrailenabled: "false",
        cursorborderradius: "0px"
    });
    
    //menu active calling scroll spy
    $("body").scrollspy({
        target: ".main-menu",
        offset: 80
    });    
    
    //SMOOTH SCROLL
   $("a[href*=#]:not([href=#])").click(function () {
       if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
           var target = $(this.hash);
           target = target.length ? target : $("[name" + this.hash.slice(1) +"]");
           if(target.length) {
               $("html, body").animate({
                   scrollTop: target.offset().top
               }, 1000);
               return false;
           }
       }
   });
    
}(jQuery));
