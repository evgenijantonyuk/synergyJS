console.log('Массывы и методы массивов')
// Шаблонные литералы - `` позволяют выводить не одной строкой, а как написано...
let usersList = `Users online:
* Ivan;
* Anna;
* Evgenij;
`
console.log(usersList);

// =========================== Специальные символы:
// Символ экранирования - \
let userListSpecial = 'User online: \n * Ivan' // \n - перенос строки
console.log(userListSpecial)
// два способа использования апострофа - экранирование и разные кавычки
let exampleOne = 'I\`m batman'
let exampleTwo = "I'm batman"

console.log(exampleOne)
console.log(exampleTwo)
console.log('\u{1F60D}') // символ смайлик

//  длинна строки
let str = 'Length of this string is'
console.log(`Length of this string is ${str.length} letter`) // свойство, ф не функция

// доступ к конкретному символу
let greeting = 'Hello'
console.log(greeting[0])
console.log(greeting.charAt(1)) // метод

for (let char of greeting) {
    console.log(char)
}

// ===================== Методы всегда заканчиваются круглыми скобками
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting[0].toLowerCase())

let darthVader = 'Luke, I am your father'
console.log(darthVader)
console.log(darthVader.indexOf('Luke'))
console.log(darthVader.indexOf('mother'))
console.log(darthVader.indexOf('a'))
console.log(darthVader.indexOf('a', 9))

console.log('Работает цикл: ')
let pos = -1
while ((pos = darthVader.indexOf('a', pos +1)) !== -1) {
    console.log(pos)
}

console.log(darthVader.indexOf('u'))
console.log(darthVader.lastIndexOf('u'))

console.log(darthVader.includes('a'))
console.log(darthVader.includes('a', 9))

console.log(darthVader.startsWith('Luke'))
console.log(darthVader.endsWith('father'))

console.log(darthVader.slice(6)) // start
console.log(darthVader.slice(6, 10)) // start and end
console.log(darthVader.slice(-6))

console.log(darthVader.substring(11)) // start
console.log(darthVader.substring(11, 16)) // start and end

console.log(darthVader.substr(11))
console.log(darthVader.substr(11, 4)) // start and length

// сравнение строк
console.log(darthVader.codePointAt(0))
console.log(String.fromCodePoint(76))

console.log('Ōsterreich'.localeCompare('Zealand')) // -1
console.log('Zealand'.localeCompare('Zealand')) // 0
console.log('Zealand'.localeCompare('Ōsterreich')) // 1

// =============== Объявление массивов
let arr1 = new Array();
let arr2 = [];

let users = ['Andrej', 'Anna', 'Evgenij'] // 0, 1, 2
console.log(users)
console.log(users[0])

users[1] = 'Tomas' // Значения в массиве можно менять, в отличии от строк
console.log(users)
console.log(users.length)  // Длинна массива

users[3] = 'Oleg' // можно добавлять значения в массив 0, 1, 2, 3
console.log(users)
console.log(users.length)

users[4] = 5 // можно добавлять число в массив
console.log(users)

// очередь и стэк
users.pop() // удалить последний элемент
console.log(users)
users.push('Lena')   // добавить последний элемент
console.log(users)

users.shift() // удалить первый элемент
console.log(users)
users.unshift('Sergej') // добавить первый элемент
console.log(users)

// ================== работа с массивами
//     цикл FOR
for (let i = 0; i < users.length; i++) {
    console.log(users[i])
}

//     цикл FOR OF
for (let user of users) {
    console.log(user)
}

// удаление эл-тов
users.length = [0]
console.log(users)

// многомерные массивы
let matrix = [
    [10, 9, 8],
    [7, 6, 5],
    [4, 3, 2]
]
console.log(matrix)
console.log(matrix[0] [1])



