// ======================================== Циклы WHILE и FOR
// ================= while
let f = 0;
while (f <= 8) {
    console.log(f)
    // f++
    f = f + 1
}

let i = 1;
while (i <= 5) {
    console.log(i)
    // i++
    i = i + 1
}
// ============= кол-во букв "b" в слове Bobby
let str1 = 'Arrow';
let rLetter = 0;
i = 0;
while (i < str1.length) {
    if (str1[i] === 'r') {
        rLetter = rLetter + 1
    }
    i = i + 1
}
console.log(`В слове ${str1} букв "r" ${rLetter}`)
//
let str = 'success';
let sLetter = 0;
i = 0
while (i < str.length) {
    if (str[i] === 's') {
        sLetter = sLetter + 1
    }
    i = i + 1
}
console.log(`В слове ${str} букв "s" ${sLetter}`)

let div = 2;
let num = 17;
let flag = 1;

while (div <= num/2) {
    if (num % div === 0) {
        console.log(`Число ${num} не является простым`);
        flag = 0;
        break;
    }
    div = div + 1;
}
if (flag === 1) {
    console.log(`Число ${num} является простым`);
}
// =================цикл do while
i = 1
do {       //тело цикла
    console.log(i)
    i++
} while
    (i <= 5);    //условие

// ==================== цикл FOR
for (i = 1; i <= 7; i++) {
    console.log(i)
}

for (let k = 1; k <= 3; k = k + 1) {
    console.log(k)
}
// аерестановка букв в обратном порядке
str = 'Alex';
let newStr = '';
let letter = '';

for (i = 0; i < str.length; i++) {
    letter = str[str.length - i - 1]
    newStr = newStr + letter;
}
console.log(newStr);

//   директива continue
for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) continue; // если true, то пропустить оставшуюся часть тела цикла
    console.log(j)
}




