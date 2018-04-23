$(document).ready(function () {
    //smooth scrolling
    var scrollLink = $(".scroll");

    scrollLink.click(function (e) {

        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top 
        }, 2000);
    });
    //Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 70;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });


    });
    
    

});


$(window).scroll(function () {
    var Beneden = 0;

    if ($(document).scrollTop() > 600) {
        Beneden = Beneden - 80;
        document.getElementById("shit").style.marginTop = Beneden + "vh";
        document.getElementById("home").innerHTML = 'HOME';

    } else if ($(document).scrollTop() < 100 && document.getElementById("shit").style.marginTop == '-80vh') {
        Beneden = Beneden + 0;
        document.getElementById("shit").style.marginTop = Beneden + "%";
        document.getElementById("home").innerHTML = '';
        document.getElementById("home").style.borderRight = 'none';
    }
});


       