console.log('Домашнее задание к уроку 10.4')

// Задание 1
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Число ${i} кратно 3 и 5`)
        }
            else if (i % 5 === 0) {
                console.log(`Число ${i} кратно 5`)
        }
        else if (i % 3 === 0) {
            console.log(`Число ${i} кратно 3`)
        }
        else {
            console.log(i)
        }
}

// Задание 2
for (i = 1; i < 10; ++i) {
    for (let c = 0; c < 10; ++c) {
        for (let b = 0; b < 10; ++b) {
            let cube = (Math.pow(i, 3) + Math.pow(c, 3) + Math.pow(b, 3))
            let summa = (i * 100 + c * 10 + b)
            if (cube === summa) {
                console.log(`Число Армстронга ${cube}`)
            }
        }
    }
}
// Задание 3
let fistNumber = 2178
let secondNumber = 345
let gcd

while (fistNumber !== secondNumber) {
    if (fistNumber > secondNumber) {
        fistNumber = fistNumber - secondNumber
    }
    else {
        secondNumber = secondNumber - fistNumber
    }
}
gcd = fistNumber
console.log(`Наибольший общий делитель ${gcd}`)


