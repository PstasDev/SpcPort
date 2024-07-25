const currentYear = new Date().getFullYear();
const age = currentYear - 1981;
const element = document.getElementById('kareszage');
if (element) {
    element.innerHTML = age;
}