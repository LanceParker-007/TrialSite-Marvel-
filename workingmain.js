$(function(){
    var slides = $('.slideShow>li');
    var slidecnt = 0;
    var totalslides = slides.length;
    var slideCache = [];

    (function preloader(){
        if(slidecnt < totalslides)
        {
            slideCache[slidecnt] = new Image();
            slideCache[slidecnt].src = slides.eq(slidecnt).find('img').attr('src');
            slideCache[slidecnt].onload = function(){
                slidecnt++;
                preloader();
            } 
        }
        else
        {
            slidecnt = 0;
            SlideShow();
        }
    }());
    function SlideShow(){
        slides.eq(slidecnt).fadeIn(1000).delay(2000).fadeOut(1000,function(){
            slidecnt < totalslides - 1 ? slidecnt++ : slidecnt = 0;
            SlideShow();
        });
    }
});