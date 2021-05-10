// Add/Remove blur Slick
function changeclass() {
    $(".sliderContainer,.sliderContainerNoBlur").toggleClass('sliderContainer').toggleClass('sliderContainerNoBlur');
}

// Scroll reveal

ScrollReveal().reveal('#section2, #section3, #section1, #card0, #card1, #card2', {
    viewFactor: 0.5,
    easing: 'ease-in',
    useDelay: 'once',
    interval: 150
});

