// ============================================ Урок I ====================================================

// Заголовок
let lessonHeader = 'Домашняя работа по итогам урока 1';
console.log(lessonHeader)
// Данные
let myName = 'Егений';
let myAge = 46;
let myFamilyStatus = true;
// Вывод данных
console.log(`Имя: ${myName}. Возраст: ${myAge}. Семейное положение: ${myFamilyStatus}`);
// Типы переменных для вывода одной строкой получилось сделать только так:
console.log(`Имя первой переменной 'MY_NAME', Имя второй переменной 'MY_AGE', Имя третьей переменной 'FAMILY_STATUS'.` + ' Тип первой переменной' + ' ' + typeof(myName) + '.' + ' Тип второй переменной' + ' ' + typeof(myAge) + '.' + ' Тип третьей переменной' + ' ' + typeof(myFamilyStatus) +'.');
// Типы переменных на разных строках
console.log(`Имя первой переменной 'MY_NAME', Тип переменной:` + ' ' + typeof(myName));
console.log(`Имя первой переменной 'MY_AGE', Тип переменной:` + ' ' + typeof(myAge));
console.log(`Имя первой переменной 'FAMILY_STATUS', Тип переменной:` + ' ' + typeof(myFamilyStatus));

// ============================================= Урок II ==================================================
let bool = true;
let number = 654;
console.log(typeof (bool));
console.log(typeof (number));

bool = String (bool);
number = String (number);
console.log('Тип данных переменной: ' + typeof (bool));
console.log('Тип данных переменной: ' + typeof (number));

let str = '2 + 5';
console.log('2 + 5');
// происходит конкатинаия строк(особенность оператора +)
console.log(3 + '2 + 5');

//  ===================== числовые преобразования
console.log('10' / '5')
console.log('10' * '5')
console.log('10' + '5')
console.log('10' - '5')

let strNum = '565';
let boolNum = true;

console.log('Тип данных strNum: ' + typeof (strNum));
console.log('Тип данных boolNum: ' + typeof (boolNum));

strNum = Number(strNum);
boolNum = Number(boolNum);
// при приведении boolean к числу - получается true=1 / false=0
console.log('Тип данных strNum: ' + typeof (strNum));
console.log('Тип данных boolNum: ' + typeof (boolNum));
console.log(boolNum);

let someFieldInForm = Number('Непереводимая игра слов');
console.log('Тип данных someFieldInForm: ' + typeof (someFieldInForm));
console.log(someFieldInForm);
// специфические значения, которые нужно знать
let undf = undefined;
let nl = null;
let trueVar = true;
let falseVar = false;
let emptyString = '';

undf = Number(undf);
nl = Number(nl);
trueVar = Number(true);
falseVar = Number(false);
emptyString = Number('');

console.log(undf, nl, trueVar, falseVar, emptyString);

// логические преобразования
 undf = undefined;
 nl = null;
let numVar = 0;
 emptyString = '';

undf = Boolean(undf);
nl = Boolean(nl);
numVar = Boolean(numVar);
emptyString = Boolean(emptyString);

console.log(undf, nl, numVar, emptyString)

let strBool = 'Hello';
let strNull = '0';
let numBool = 564;

strBool = Boolean(strBool);
strNull = Boolean(strNull);
numBool = Boolean(numBool);

console.log(strBool, strNull, numBool);

//  операторы + - / * % ** бинарные
    let mode = 42 % 9; // вычисление остатка от деления
    let pow = 7 ** 2; //возведение в степень
    let pow2 = 25 ** (1/2);
    
    console.log(mode, pow, pow2);
    
//     унарные
let neg = -5;
let sumNew = neg + 7;
let pos = +6;
console.log(sumNew, pos);
// оператор + позволяет получить из строки где записано число само это число
let strToNum = + '5';
console.log(strToNum);
console.log(strToNum + ' ' + typeof (strToNum));

// математическое сложение строк
let strFive ='5';
let strSeven = '7';
console.log(strFive + strSeven);
console.log(+strFive + +strSeven);  // получаем число из строки при помощи +

let numF = 9;
let strE = '10';
console.log(numF + strE);  // конкатинация - 910
console.log(numF + +strE);       // получаем число из строки при помощи +

// присваивание
let a = 6;
let b = 9;
let c = 3 - (a = b + 1);
console.log(a, c);

// сокращенная запись
let x = 18;
x += 2 // x = x + 2
x /= 2 // x = x / 2
console.log(x)

x = 2;
x *= 6 + 3; // x = x * (6 + 3)
console.log(x)

// инкремент(+1) / дикремент(-1)
// префиксная форма
let count = 2;
console.log(++count);
console.log(--count);
// постфиксная форма
count = 3;
console.log(count++);
console.log(count++);

// операторы сравнения
let g = 5;
let h = 6;
console.log(g > h);
console.log(g < h);
console.log(g >= h);
console.log(g <= h);
console.log(g === h);
console.log(g !== h);
// сравниваются коды символов
console.log('no' > 'yes');
console.log('yes' > 'no');

// сравнение разных типов
console.log('5' > 3); //true
console.log('03' > 1); //true
console.log(false == 0); //true
console.log(false == 1); //false
console.log(false != 0); //false
console.log(true == 1); //true
console.log(true == 0); //false
console.log(false == ''); //true
// Строгое сравнение сравнивает !типы! операндов
console.log(false === ''); //false
console.log(false === 0); //false
console.log(false !== 1); //true

// только! при нестрогом сравнении null и undefined всегда равны друг другу - true
//  при строгом нет!

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
// undefined  ни с чем сравнивать нельзя!
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

