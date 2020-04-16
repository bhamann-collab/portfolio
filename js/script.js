$( document ).ready(function() {
    let navBar = $("main").find("ul")

    //mobile navigation bar
    $(".burger").on("click", toggleNavbarHamburger);
    $(window).resize(function() {
        if ($(window).width() > 722) {
            shutNavbarHamburger();
        }
    })

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

