$(document).ready(function(){

    // OWL Carousel Banner
    $('.hero-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:true,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:750,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


    // OWL Carousel Brand Logo
    $('.brand-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay:true,
        autoplayTimeout:2500,
        smartSpeed:500,
        responsive:{
            0:{
                items:2
            },
            560:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    })

});