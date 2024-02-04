
console.log('Домашнее задание к уроку 10.5');
//======================
console.log('Задание 1');

let string = 'luke, I am your father';
console.log(`Строка до преобразования - ${string}`);

string = string[0].toUpperCase() + string.slice(1);
console.log(`Строка после преобразования - ${string}`);

// ============================
console.log('Задание 2');

let fistString = 'AbcdEfg';
let secondString = 'abCDEFg';

console.log(`Первая строка - ${fistString}`);
console.log(`Вторая строка - ${secondString}`);

console.log(fistString.localeCompare(secondString)); // Строки не равны - 1

fistString = fistString.toUpperCase();
secondString = secondString.toUpperCase();

console.log(`Первая строка после преобразования - ${fistString}`);
console.log(`Вторая строка после преобразования - ${secondString}`);

console.log(fistString.localeCompare(secondString)); // Строки равны - 0
console.log(`Строка "${fistString}" равна строке "${secondString}"`)

// ==============================
console.log('Зфдание 3')

let arrayEars = [2000, 2001, 2002, 2003, 2004, 2005];
    let longEars = [];
    
for (let i = 0; i < arrayEars.length; i++) {
    if ((arrayEars[i] % 4 === 0 && arrayEars[i] % 100 !== 0) || (arrayEars[i] % 100 === 0 && arrayEars[i] % 400 === 0)) {
        longEars.push(arrayEars[i])
    }
}

    console.log(`Високосные года - ${longEars}`)

//=======================================
console.log('Зфдание 4');
    
    let numbersArray = [ 6, 187, 66, 4, 67, 30, 18 ]; // оригинальный массив
// делаем копию, чтобы оригинальный массив "numbersArray" не менялся и сортируем массив "sorted" методом "sort"
    let sorted = numbersArray.slice().sort((a, b) => a - b);
    
    console.log(`Оригинальный массив ${numbersArray} и сортированный методом .sort() ${sorted}`);

    sorted.reverse();

    console.log(`Сортированный методом .reverse() массив ${sorted}`); // Массив сортируется в обратном порядке

// ===================================================================================================================