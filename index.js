console.log('Асинхронность и колбэки');

function first() {
    setTimeout(function(){
        console.log('I am the first!');
    }, 1000);
}

function second() {
    console.log('I am the second!');
}
first();
second();