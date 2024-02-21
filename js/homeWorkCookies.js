
// ===================================== COOKIES =======================================
getCookie('user name', 'Evgenij', 365);
function getCookie(name, volume, expires) {
    let date = new Date;
    date.setDate(date.getDate() + expires);
    document.cookie = name+"="+volume+"; path=/; expires=" + date.toUTCString();
}
test = readCookie('user name');

function readCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}
// ================================= LOCAL STORAGE ====================================
inputName.value = localStorage.getItem('inputName');
inputName.oninput = () => {
    localStorage.setItem('inputName', inputName.value)
};
