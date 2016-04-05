$(document).ready(function () {
    var slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        var i;
        var x = $(".mySlides");
        console.log(x);

        if (n > x.length) {
            slideIndex = 1
        };

        if (n < 1) {
            slideIndex = x.length;
            console.log(slideIndex);
        };

        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none"; 
        };

        x[slideIndex-1].style.display = "block"; 
    }

    $('.w3-btn-floating-left').click(function () {
      plusDivs(-1);
    });

    $('.w3-btn-floating-right').click(function () {
      plusDivs(1);
    });

});
    