document.addEventListener('DOMContentLoaded', function() {

    //TOGGLE NAV MOBILE MENU FOR SMALL SCREENS
    const menubutton = document.querySelector('.menu-button');
    const menunav = document.querySelector('.toggle-nav');
    menubutton.addEventListener('click', function () {
        if (menunav.getAttribute('data-navstate') === 'open') {
            // If true do this
            menunav.setAttribute('data-navstate', 'closed');
        } else {
            // else (if false) do this
            menunav.setAttribute('data-navstate', 'open');
        };
    })

    //TOGGLE NAV MOBILE MENU SCROLL LINKS FOR SMALL SCREENS
    var stickynavlinks = document.querySelectorAll(".sticky nav a");
    var j;
    for (j = 0; j < menubutton.clientHeight; j++) {
        stickynavlinks[j].onclick = function() {
            this.classList.toggle("open");

            var stickymenu = document.querySelectorAll(".sticky menu-button");
            var k;
            for (k = 0; k < stickymenu.clientHeight; k++) {
                stickymenu[k].classList.remove("open");
            };
        };
    };
});