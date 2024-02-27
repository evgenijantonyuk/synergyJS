// ========================== Дуструктуризация ===============================
const theme = 'Тема - Деструктуризация.';
console.log(theme);

//  Массивы
console.log('== Деструктуризация массива ==');
let users = ['J. Bond', 'J. Sparrow'];

//  Деструктурирующее присваивание
let [user1, user2] = users;
console.log('Деструктурирующее присваивание: ' + user1 + ' и ' + user2);
//  иначе
console.log('Вывод массива с помощью цикла: ');
for (i = 0; i < users.length; i++) {
    console.log(users[i] + ' ');
}

console.log('== Финкции, возвращяющие массив ==');
let str = 'live long and prosper';
let [live, long, and, prosper] = str.split(' ');
console.log(prosper, and, live, long)

// элементы можно пропускать
console.log('=== Пропускаем элементы ===');
[live, long, , prosper] = str.split(' ');
console.log(live, long + ', ' + prosper);

// можем работать с любым перебираемым объектом
console.log('=== Деструктурируем перебираемые объекты ====');
let [one, two, three] = '123';
console.log(one, two, three);
console.log(one + two + three);

// оператор "остаточные параметры..."
console.log('=== Остаточные параметры ===');
let [noun, verb, ...other] = ['I am', 'gonna', 'make', 'him', 'an', 'offer', 'he', 'can not', 'refuse'];  // other стоит на последнем месте в деструктурирующемм присваивании
console.log(noun, verb, other);
console.log(other.length);

// если элементов в массиве меньше
console.log('=== Элементов в массиве меньше ===');
[one, two, three] = ['one', 'two'];
console.log(one, two, three)

//  Значения по умолчанию
console.log ('=== Значения по умолчанию ===');
[one, two, three = 'three'] = ['one', 'two'];
console.log(one, two, three);
    
    [one, two, three = 'three'] = ['one', 'two', 'ten'];
console.log(one, two, three);

//  Оъекты
console.log('=== Деструкторизация объектов ===');
let user = {
    name: 'John',
    email: 'user_email@email.com',
    age: 25
};
// let {name, email, age} = user;
// ({name, email, age} = user);
// console.log(name, email, age)
// console.log(name, age, email);

let {name: userName, email: userEmail, age: userAge} = {
    name: 'John',
    email: 'user_email@email.com',
    age: 25
};
console.log(userAge, userEmail, userName);

// значения по умолчанию
let user3 = {
    name: 'Anna',
};
let {name: nameUser, email: emailUser = 'user_email@email.com', age: ageUser = 27} = user3;
console.log(nameUser);
console.log(emailUser);
console.log(ageUser);

