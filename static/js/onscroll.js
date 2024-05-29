var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var navbar = document.getElementById("navbar");
    var scrollMoreA = document.getElementById("scrollMoreA");
    var tothetop = document.getElementById("tothetop");

    if (navbar) {
        if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-15rem";
        }
    }

    if (scrollMoreA) {
        if (currentScrollPos < 50) {
            scrollMoreA.style.opacity = "1";
            scrollMoreA.style.pointerEvents = "auto";
        } else {
            scrollMoreA.style.opacity = "0";
            scrollMoreA.style.pointerEvents = "none";
        }
    }

    if (tothetop) {
        if (currentScrollPos > 500) {
            tothetop.style.opacity = "1";
            tothetop.style.pointerEvents = "auto";

            document.body.classList.remove("bg-white", "dark:bg-neutral-900");
            document.body.classList.add("bg-cyan-900", "dark:bg-cyan-600");
        } else {
            tothetop.style.opacity = "0";
            tothetop.style.pointerEvents = "none";

            document.body.classList.remove("bg-cyan-900", "dark:bg-cyan-600");
            document.body.classList.add("bg-white", "dark:bg-neutral-900");
        }
    }

    prevScrollpos = currentScrollPos;
}
