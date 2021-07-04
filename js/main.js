$(function () {

    $('.top__slider').slick({
        dots: true, 
        arrows: false,
        fade: true,
        autoplay: true
    });

    var mixer = mixitup('.gallery__inner',{
        load: {
            filter: '.bowls'
        }
    });

})