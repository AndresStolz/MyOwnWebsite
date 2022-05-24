$(document).ready(function() {
    $(window).scroll(function(event) {
        var s = $(this).scrollTop();
        var w = $(this).outerWidth();
        var h = $('.content').outerHeight();
        var h_b = $('.parallax').outerHeight();
        var p = s/h*100;
        var p_b = s/h_b*100;
        var o = 1-1/100*p_b;

        var z_1 = 1+(w/10000*p_b);
        
        var z_2 = 1+(w/5000000*p);
        $('.parallax-bg').css('transform', 'scale('+z_2+')');

        var hr = w/2000*p_b;
        var z_3 = 1+(w*0.000005*p_b);
        $('.parallax-earth').css('transform','translate3d('+hr+'px,0,0) scale('+z_3+')');

        var cont = 1+w/500000*p;
        $('.content-header').css('transform', 'scale('+cont+')');
    });
});