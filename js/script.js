$( document ).ready(function() {
    let navBar = $("nav").find("ul")

    //mobile navigation bar
    $(".burger").on("click", toggleNavbarHamburger);

    

    $(window).resize(function() {
        resizeBackgroundPic()
        if ($(window).width() > 722) {
            shutNavbarHamburger();
        }
    })

    //clicking on nav links
    $("nav").find("a").on("click", shutNavbarHamburger)

        //navigate to another part of the page animation
        $(document).on("click","a",function(e){
            var id = $(this).attr("href"),
                topSpace = 30;
        //alert(id);
            $('html, body').animate({
              scrollTop: $(id).offset().top - topSpace
            }, 800);
        });

        //Sending an email
        $("#submitButton").click(function (event) {
            console.log("button is being clicked mate");

            var email = $('.email').val();
            var subject = $('.subject').val();
            var message = $('.message').val();

            if(email.length > 5 && email.includes('@') && email.includes('.') && subject.length > 2 && message.length > 10) {
                console.log('Form is valid')
            } else {
                event.preventDefault();
                alert('Email is not valid');
            }
        })
        //Sending an email

    function toggleNavbarHamburger() {
        if(navBar.css("display") === "none"){
            navBar.css("display", "block")
            navBar.animate({width: "280px"}, 300)

        } else if(navBar.css("display") === "block") {
            navBar.animate({width: "0px"}, 300, shutNavbarHamburger)
        }
    }

    function shutNavbarHamburger() {
        navBar.removeAttr('style');
    }

    function resizeBackgroundPic() {
        $(".backgroundPicture").css("height",`${$("main").height()}`);
    }


    
});


//Typewriter starts here
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #FFF}";
    document.body.appendChild(css);
};
//Typewriter ends here