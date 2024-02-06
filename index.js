console.log('Функции. Урок 10,7');
// Фанкшин декларайшн
function greetingAnna() {
    console.log('Greeting Anna!');
}
greetingAnna()

let userName = 'Evgenij';   // Глобальные переменные
function greetingUser() {
    let greeting = 'Hello, ' + userName;
    console.log(greeting)
}
greetingUser()

function greetingUser1() {
    userName = 'Ivan';   // Локальная переменные
    let greeting = 'Hello, ' + userName;
    console.log(greeting)
}
greetingUser1()
console.log(userName)// Изменили глобальную переменную с помощью присвоения имени переменной внутри функции
console.log(userName)

function greetUser(userName) {
    userName = userName + '!';
    let greeting1 = 'Hello, ' + userName;
    console.log(greeting1)
}
userName = 'John'
greetUser(userName)
console.log(userName)

// Аргументы функции по умолчанию
function greetUser2(userName, text = 'Привет, ') {
    userName = userName + '!';
    let greeting = text +  userName;
    console.log(greeting)
}
greetUser2(userName)
greetUser2(userName, 'Hi, ')

// Возврат значений
function howReturnWorks() {
    // return 8;
    return 9;
}
console.log(howReturnWorks())

function getSum(a, b) {
    sum = a + b;
    return sum;
}
console.log(getSum(5, 7));


function checkAge(age) {
    if (age >= 18) {
        return true
    } else {
        return 'Вход запрещен'
    }
}
console.log(checkAge(18))

//  function expression
let greeting = function () {
    console.log('Я вас приветствую');
}
console.log(greeting)
greeting()

let func = greeting;
console.log(func)

// стрелочные функции
let numbers = [6, 187, 66, 4, 67, 30, 18];
console.log(numbers.sort((a, b) => a - b));

let sum1 = (a, b) => a + b;

let sum2 = function (a, b) {
    return a + b;
};
console.log(sum1(5, 6))
console.log(sum2(5, 6))

let mult = c => c * 2;
console.log(mult(9));

let greeting1 = () => console.log('Добрый день');
greeting1()

let sum3 = (a, b) => {
    let result = a + b;
    return result;
}
console.log(sum3(7, 3));