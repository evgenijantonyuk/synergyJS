console.log('Задание к уроку 10.7.')
console.log('--- Палиндром ---.')
function palindrome(str) {
    // Меняем регистр строки на нижний убираем пробелы и знаки препенания
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    // Переворачиваем строку и возвращаем результат сравнения
    // return str === str.split('').reverse().join(''); // в коссоле получаем true или false
    // или при помощи конструкции IF ... ELSE ...
    if ( str === str.split('').reverse().join('')) {
        console.log(`${str} - это палиндром!`);
    } else {
        console.log(`${str} - это не палиндром!`);
    }
}
palindrome('Шалаш');
palindrome('101');
palindrome('компьютер');
palindrome('Лидер бодро, гордо бредил.');
palindrome('Лидер бодро, гордо бродил.');
//  =========================================================
console.log('--- Простые числа ----');

function simpleNumber (number) {
    if (number === 0) {
        console.log(`${number} - Число равно нулю`)
        return false;
    } else {
        for(let i = 2; i < number; i++) {
            if(number % i === 0) {
                console.log(`${number} - Не простое число.`)
                return false;
            }
        }
        console.log(`${number} - Простое число.`)
        return true;
    }
}
simpleNumber(5);
// =====================================================
console.log('--- Возраст по дате рождения ----');
function getAge(dateStr) {
    let today = new Date();
    let birthDate = new Date(dateStr);
    let age = today.getFullYear() - birthDate.getFullYear();
    let month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
console.log('Возраст: ' + getAge('1977.05.26'));  // Возраст по деню рождения - год/месяц/число
// ==========================================================
// Дата - выходной день
console.log('--- Был ли введенный день выходным ---')

function checkDate(dateStr) {
    const [day, month, year] = dateStr.split('.');
    
    const date = new Date(year, month - 1, day);
    
    return (date.getDay() === 0 || date.getDay() === 6);
}
console.log(checkDate('06.02.2021')); // true - выходной день
console.log(checkDate('04.02.2021')); // false - не выходной день
//==============
let weekendDay =  function(date){
    let day = new Date(date);
    
    if(day.getDay() === 6 || day.getDay() === 0)
    {
        return `${day} выходной день`;
    }
    else {
        return `${day} не выходной день`;
    }
}

console.log(weekendDay('February 10, 2001'));