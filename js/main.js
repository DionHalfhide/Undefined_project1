$(document).ready(function () {
    
    $("#us")
    .mouseenter(function () {
     
        $("#xuss").css("text-decoration-line", ' line-through');
        $("#xus").css("text-decoration-line", ' line-through');
    })
    .mouseleave(function () {
        $("#xuss").css("text-decoration-line", ' none');
        $("#xus").css("text-decoration-line", ' none');
        
    });

    
    //smooth scrolling
    var scrollLink = $(".scroll");

    scrollLink.click(function (e) {

        e.preventDefault();
        $("body,html").animate({
            scrollTop: $(this.hash).offset().top - 50
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
    if ($(document).scrollTop() > 10) {
        $("nav").css("box-shadow", ' 0px 4px 48px -1px rgba(0,0,0,0.57)');
    } else if ($(document).scrollTop() < 10) {
        $("nav").css("box-shadow", ' 0px 4px 48px -1px rgba(0,0,0,0.00)');
        
    }
});
$(window).scroll(function () {
    if ($(document).scrollTop() > 1) {
       $("nav").css("background", ' linear-gradient(120deg, rgba(71, 193, 162, 0.80) 52.25%, rgba(255, 255, 255, 0.8) 52.25%)');
    } else if ($(document).scrollTop() < 1) {
         $("nav").css("background", 'none');
    }
});



