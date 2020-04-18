$( document ).ready(function() {
    let navBar = $("main").find("ul")

    //mobile navigation bar
    $(".burger").on("click", toggleNavbarHamburger);
    $(window).resize(function() {
        if ($(window).width() > 722) {
            shutNavbarHamburger();
        }
    })

    //clicking on nav links
    $("main").find("a").on("click", shutNavbarHamburger)

        //navigate to another part of the page animation
        $(document).on("click","a",function(e){
            e.preventDefault();
            var id = $(this).attr("href"),
                topSpace = 30;
        //alert(id);
            $('html, body').animate({
              scrollTop: $(id).offset().top - topSpace
            }, 800);
        });

    function toggleNavbarHamburger() {
        if(navBar.css("display") === "none"){
            navBar.css("display", "block")
        } else if(navBar.css("display") === "block") {
            navBar.removeAttr('style');
        }
    }

    function shutNavbarHamburger() {
        navBar.removeAttr('style');
    }
});

