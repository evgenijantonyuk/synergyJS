
// любое название переменной promise
let promise = new Promise(function (resolve, reject) {
   // executor - экзикьютор
    setTimeout(function () {
        let mark = Math.floor(Math.random() * 4) + 2;
        if (mark > 3) {
            resolve(mark);
        } else {
            reject(mark);  // reject(new Error ('Whoops'))
        }
    }, 1000)
})
// любое название переменной promise\

promise.then(
    result => console.log(`I have got ${result}! The prize is mine.`),
    error => console.log(`Oh, no! I have got a ${error}`)
)

promise                      // Используется чаще
    .then(result => console.log(`I have got ${result}! The prize is mine.`))
    .catch(error => console.log(`Oh, no! I have got a ${error}`));

// Констатирует что промис окончен
promise
.finally(() => console.log('Promise is finished'))