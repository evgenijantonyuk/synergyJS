// какое значние у this
const carDescription = {
    brand: 'Ford Mustang',
    year: 2020,
    getBrand() {
        return this.brand
    },
    isRegistered: true
}
console.log(carDescription.getBrand())

// стрелочные функции
let getCurrentDate = function (){
    return new Date()
}
const getCurrentDate1 = () => new Date();

function greeting(name) {
    return 'Hello' + name + '!';
}
const greet = (name) => `Hello ${name}`
const greet2 = name => `Hello ${name}`

console.log(greet('Anna'))
console.log(greet2('Tom'))

// Шаблошшые литералы
let lastWords = `
    I
    am
    Iron Man
    `
console.log(lastWords)

// классы и конструкторы функций
// функция
function Employee (name) {
    this.name = name
}
let emp1 = new Employee('Alex')
console.log(emp1.name)

// класс
class EmployeeClass {
    constructor(name) {
        this.name = name
    }
}
let emp2 = new EmployeeClass('Andrew')
console.log(emp2.name)

// функция
function Desinger (name, employeeId) {
  // вызываем конструктор суперкласса для инициализации полей, унаследованных от него
    Employee.call(this.name)
    // инициализация собственных полей объекта
    this.emloyeeId = employeeId
}
//
Desinger.prototype = Object.create(Employee.prototype)
Desinger.prototype.constructor = Desinger
emp1 = new Desinger('Alex', 82)
console.log(`Имя сотрудника ${emp1.name}
ID сотрудника ${emp1.emloyeeId}`)

// класс
class DesingerClass extends EmployeeClass {
    constructor(name, employeeId) {
        super(name);
        this.emloyeeId = employeeId
    }
}
emp2 = new DesingerClass('Andrew', 56)
console.log(`Имя сотрудника ${emp2.name}
ID сотрудника ${emp2.emloyeeId}`)


