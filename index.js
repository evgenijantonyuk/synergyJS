
// Урок 10.3
// Конструкция SWICh
//  условная инструкция IF
let age = 17;
if (age < 18) {
 console.log('Несовершеннолетний');
} else {
 if (age >= 18) {
  console.log('Взрослый');
 }
}
// как вариант ==========================
// if (age >= 18) {
//  console.log('Взрослый');
// }
// =====================================
// 0,  " ", null, undefined, Nan - falsy-значения, всегда дают значение false
// Тернарный(условный) оператор
let access;
if (age < 18) {
 access = false;
}
 else {
 access = true;
}
 console.log(access);
// Тернарный оператор - в одну строку... теряет читаемость
 let result = (age > 18) ? false : true;
 console.log(result);
 
//  логические операторы
//                              && конюнъюнкция / логическое "И" / true И true = true
//                              || дезъюнкция / логическое "ИЛИ" / true ИЛИ false = true
//                              ! инверсия / логическое "НЕ" / !true == false
//                              !! двойная инверсия / !! true == true
console.log( 1 || 1)  // 1
console.log(0 || 1)   // 1
console.log( 1 || 0)  // 1
console.log(0 || 0)   // 0

if( 1 || 0) {
 console.log('Правда')
}

let hour = 9;
if (hour < 10 || hour > 18) {
 console.log('Closed');
}
else {
 console.log('Open');
}

// ИЛИ "||" находид первое истинное значение - true
console.log( null || 0 || 1); // 1

// && - оператор принимает true только если оба зачения правдивы

console.log(true && true)  // true
console.log(true && false) //  false
console.log(false && true) //  false
console.log(false && false) //  false

let login = 'Anna', pass = '123';
let loginFromDB = 'Anna', passwordFromDB = '123';

if (login === loginFromDB && pass === passwordFromDB) {
 console.log('Добро пожаловать');
}
else if (login === loginFromDB) {
 console.log('Проверьте пароль');
}
else {
 console.log('Пройдите регистрацию');
}
// ИЛИ "&&" находид первое ложное значение - false
console.log(5 && 3 && null)  // null

// инверсия "НЕ - НЕ"
console.log(!true) //false
console.log(!0)  //true

console.log(!!'not empty') //true
console.log(!!null)  //false

// конструкция SWITCH
let num = 3, seasons;
switch (num) {
 case 1:
  seasons = 'Winter';
  break;
 case 2:
  seasons = 'Spring';
  break;
 case 3:
  seasons = 'Summer';
  break;
 case 4:
  seasons = 'Fall';
  break;
 default:
  seasons = 'Значение не найдено';
}
console.log(seasons);










