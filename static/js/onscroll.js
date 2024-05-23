var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("scrollMore").style.opacity = "100";
} else {
    document.getElementById("navbar").style.top = "-15rem";
    document.getElementById("scrollMore").style.opacity = "0";
}
prevScrollpos = currentScrollPos;
}