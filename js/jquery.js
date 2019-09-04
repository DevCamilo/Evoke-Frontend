$(document).ready(function() {
    $('.parallax').parallax();
});
$(document).ready(function() {
    $('select').formSelect();
});
//JQUERY//
$(document).ready(function() {

    var parrafo_hola = $("#hola p");

    $("#zoom_hola").click(function() {
        parrafo_hola.toggleClass("flow-text");
    })

    var parrafo = $("#post p");

    $("#zoom_post").click(function() {
        parrafo.toggleClass("flow-text");
    })

    $(".dropdown-trigger").dropdown({ constrainWidth: false });

    //Sidenav//
    $('.sidenav').sidenav();
    //collapsible//
    $('.collapsible').collapsible();
    //Carousel//
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    //Parallax//
    $('.parallax').parallax();
    document.addEventListener("DOMContentloaded", function() {
        M.AutoInit();
    })
    M.updateTextFields();
});