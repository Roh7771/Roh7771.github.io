const slider = tns({
    container: '.slider__block',
    prevButton: '.slider__prev',
    nextButton: '.slider__next',
    navContainer: '.slider__buttons',
    responsive: {
        767: {
            nav: true,  
        },
        991: {
            items: 1,
            slideBy: 1,
            nav: false,   
        }
    },
});
