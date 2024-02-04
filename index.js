let obj1 = new Object();   // конструктор объекта
let obj2 = {};                // литерал объекта

let autorizedUser = {
    name: 'John',
    login: 'JD_scrubs',
    year: 1987,
    age: 2024 - 1987,
    phone: '8(923)888-56-76',
    'has friends': true
};

console.log(autorizedUser);
console.log(autorizedUser.name);
console.log(autorizedUser.login);
// console.log(autorizedUser.has friends);  ошибка
console.log(autorizedUser["has friends"]);

autorizedUser.isMale = true;
console.log(autorizedUser);

delete autorizedUser.age;
console.log(autorizedUser);

const userFullName = {
    firstName: 'John',
    surname: 'Townsend,'
}
console.log(userFullName);

userFullName.firstName = 'Petr';
console.log(userFullName);

let fruit = 'pineApples';
let market = {
    [fruit]: 5,  //  pineApples: 5
};
console.log(market['pineApples']);
console.log(market.pineApples);
console.log('pineApples' in market);
console.log('apples' in market);

console.log('Перебор значений объектов: ');
for (let key in autorizedUser) {
    console.log(key, autorizedUser[key])
}

// метод MAP
let map = new Map;

map.set('1', 'stringAsKey');
map.set(1, 'numAsKey');
map.set(true, 'boolAsKey');

//Методы
console.log(map);
console.log(map.get('1'));
console.log(map.has(false));
console.log(map.size);
console.log(map.delete(1));
console.log(map);
console.log(map.has(1));
map.clear();
console.log(map)

// перебор значений
let clients = new Map([
    ['Jack', 1994],
    ['Bob', 1997],
    ['Alex', 1987],
])
console.log(clients)
for (let name of clients.keys()) {
    console.log(name)
}
for (let year of clients.values()) {
    console.log(year)
}
for (let value of clients) {
    console.log(value)
}

clients.forEach((value,key, map) => {
    console.log(`${key}: ${value}`)
});

// SET
let set = new Set;
let john = {name: "John"};
let pete = {name: "Pete"};
let mary = {name: "Mary"};

set.add(john);
set.add(pete);
set.add(mary);
set.add(john);   // нельзя добавить значение
set.add(mary);   //  которое там уже было, дублирующие значения туда положить нельзя!

console.log(set.size);
console.log(set);

for (let user of set) {
    console.log(user.name)   //  John (потом Pete и Mary)
}