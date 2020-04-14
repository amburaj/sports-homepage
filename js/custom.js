/* Menu functions */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



/* Scroll sticky functions */
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("header_active");
    } else {
        $("header").removeClass("header_active");
    }
});