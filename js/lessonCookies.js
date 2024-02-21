let fieldInput = document.createElement('div')
let nameField = document.createElement('input');
let text = document.createElement('h5');
let inputButton = document.createElement('button');
let yourLetter = document.createElement('div');

fieldInput.classList.add('container');
nameField.classList.add('name-field');
inputButton.classList.add('input-button');
text.classList.add('title-text');
yourLetter.classList.add('your-letter');

text.innerHTML = 'Введите Ваше имя:';
inputButton.innerHTML = 'Отправить';

document.body.append(fieldInput);
fieldInput.append(text);
fieldInput.append(nameField);
fieldInput.append(inputButton)
fieldInput.append(yourLetter)


// document.querySelector('button').onclick = myClick;
document.querySelector('.input-button').addEventListener('click', myClick)
// =========================

// =====================================
function myClick() {
    console.log('click')
    let inputText = document.querySelector('.name-field').value;
    // console.log(inputText)
    document.querySelector('.your-letter').innerHTML = inputText
}

// cookies !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let nameUs = 'Vasilij';
document.cookie = nameUs;

document.cookie = "name=Evgenij";
console.log(document.cookie )
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "( ?:^|; )" + name.replace(/([$?*|{}\[\]\\\/^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined
}

let username = getCookie('username');

if (username === undefined) {
    username = prompt("Введите имя:");
    document.cookie = "username="+encodeURIComponent(username) + ";max-age=3600";
}
// ===========================

// запись куки

let cookies = document.cookie;
console.log(cookies);

// Настройки
// expires - срок жизни cookie, max-age - аналог, но без конкретной даты
// path - путь где видны cookie
document.cookie = "user = Anna; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT";
// domain=site.com; max-age=3600; secure; somesite
console.log(document.cookie)

// =========================================
document.cookie = 'user = Ivan';
document.cookie = 'date = 17.07.2023';
document.cookie = 'age = 22';
document.cookie = 'user = Vika';
let str1 = 'Phrase with';
let str2 = 'spaces inside';

console.log(document.cookie = encodeURIComponent(str1) + '=' + encodeURIComponent(str2));
console.log(document.cookie = str1 + '=' + str2);

console.log(document.cookie = "user=Anna; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT");

// cookie со сроком жизни 1 мес...
document.cookie = "name=user; max-age=2629743";
// или
let cookie_data = new Date();
cookie_data.setMonth(cookie_data.getMonth() + 1);
document.cookie = "name-user" + cookie_data.toUTCString();
// куки со сроком жизни год
document.cookie = "name=user;max-age=31556926";

/* или */
let cookie_date = new Date();
cookie_date.setYear(cookie_date.getFullYear() + 1);
document.cookie = "name=user;expires=" + cookie_date.toUTCString();

// storage
// Local storage
localStorage.setItem("name", "Evgenij");

const local = localStorage.getItem("name");

console.log(local)

//====================
area.value = localStorage.getItem('area');
area.oninput = () => {
    localStorage.setItem('area', area.value)
};
const answerForEverything = 42;
console.log(typeof answerForEverything)
localStorage.setItem('number', answerForEverything);
console.log(typeof localStorage.getItem('number'));

// sessionStorage
sessionStorage.setItem('nameStorage', name);
const nameStorage = sessionStorage.getItem('nameStorage');

// НЬЮАНСЫ
let newUser = {
    name: 'Kirill',
    age: 31
}
// localStorage.setItem('newUser', newUser) // в localStorage получим object Object
// исправим
localStorage.setItem('newUser', JSON.stringify(newUser))
console.log(localStorage.getItem('newUser'));
let newVar = JSON.parse(localStorage.getItem('newUser'));
console.log(newVar)
newVar.age = 18;
console.log(newVar)
console.log('Тип переменной после сохранения: ' + typeof localStorage.getItem('newUser'));

// получить все ключи и значения
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(`${key}= ${localStorage.getItem(key)}`);
}

// события
window.addEventListener('storage', event => {
    console.log(event);
})



