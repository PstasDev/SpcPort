var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-15rem";
    }

    if (currentScrollPos < 50) {
        document.getElementById("scrollMoreA").style.opacity = "1";
        document.getElementById("scrollMoreA").style.pointerEvents = "auto";
    } else {
        document.getElementById("scrollMoreA").style.opacity = "0";
        document.getElementById("scrollMoreA").style.pointerEvents = "none";
    }

    if (currentScrollPos > 500) {
        document.getElementById("tothetop").style.opacity = "1";
        document.getElementById("tothetop").style.pointerEvents = "auto";

        document.body.classList.remove("bg-white", "dark:bg-neutral-900");
        document.body.classList.add("bg-cyan-900", "dark:bg-cyan-600");
    } else {
        document.getElementById("tothetop").style.opacity = "0";
        document.getElementById("tothetop").style.pointerEvents = "none";

        document.body.classList.remove("bg-cyan-900", "dark:bg-cyan-600");
        document.body.classList.add("bg-white", "dark:bg-neutral-900");
    }

    prevScrollpos = currentScrollPos;
}
