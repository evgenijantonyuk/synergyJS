
// Доманее задание 10.3
let homeWork = 'Доманее задание 10.3';
console.log(homeWork)
//  ============================ конструкция if ===========================
// let hourPart = 33
//
// if (hourPart < 1 && hourPart <= 15) {
//  console.log('Перая четверть часа')
// }
//
// if (hourPart >= 15 && hourPart <= 30) {
//  console.log('Вторая четверть часа')
// }
//
// if (hourPart >= 30 && hourPart <= 45) {
//  console.log('Третья четверть часа')
// }
//
// if (hourPart >= 45 && hourPart <= 60) {
//  console.log('Четвертая четверть часа')
// }
//
// if (hourPart > 60) {
//  console.log('Число больше количества минут в часе')
// }

// ====================== конструкция if else if =================================

let hourPart = 35;

if (hourPart > 0 && hourPart <= 15)
{
 console.log('Перая четверть часа');
}
else if (hourPart >= 15 && hourPart <= 30)
{
 console.log('Вторая четверть часа');
}
else if (hourPart >= 30 && hourPart <= 45)
{
 console.log('Третья четверть часа');
}
else if (hourPart >= 45 && hourPart <= 60)
{
 console.log('Четвертая четверть часа');
} else {
 console.log('Число больше количества минут в часе')
}

// ========================== SWITCH ====================================
let number = 7, seasonMonth;
switch (number) {
 case 1:
  seasonMonth = 'Зима, Январь.';
  break;
 case 2:
  seasonMonth = 'Зима, Февраль.';
  break;
 case 3:
  seasonMonth = 'Весна, Март.';
  break;
 case 4:
  seasonMonth = 'Весна, Апрель.';
  break;
 case 5:
  seasonMonth = 'Весна, Май.';
  break;
 case 6:
  seasonMonth = 'Лето, Июнь.';
  break;
 case 7:
  seasonMonth = 'Лето, Июль.';
  break
 case 8:
  seasonMonth = 'Лето, Август.';
  break;
 case 9:
  seasonMonth = 'Осень, Сентябрь.';
  break;
 case 10:
  seasonMonth = 'Осень, Октябрь.';
  break;
 case 11:
  seasonMonth = 'Осень, Ноябрь.';
  break;
 case 12:
  seasonMonth = 'Зима, Декабрь.';
  break;
 default:
  seasonMonth = 'Такого месяца не существует...';
}
console.log(seasonMonth);

// ================================
let digit = 3;

if (digit % 2 === 0) {
 digit = digit ** 2;
//  сокращенная запись: digit **= 2
} else {
 digit = digit ** 3;
 //  сокращенная запись: digit **= 3
}

console.log(digit)






