let resqueOpen = indexedDB.open('app', 6);
// ============================================================================
// синтаксис
// indexedDB.open('name', version)  - имя и версия БД; значение по умолчанию - 1, всегда целое число
// success - БД готова к работе
// error - ошибка, не удалось открыть БД
// upgradeneeded - БД открыта, но требует обновления
// ================================================================================
resqueOpen.onerror = function (event) {
    console.log('Error', resqueOpen.error);
};
resqueOpen.onsuccess = function (event) {
    db = resqueOpen.result;
    console.log('Мы внутри БД');
    //                                  синтаксис транзакций
// db.transaction(store [,type])
// store - хранилище
// type - тип транзакции, один из:
// readonly - только чтение, по умолчанию
// readwrite - чтение изапись данных
// versionchange - не доступно для ручного создания, вызавается только автоматически при использовании onupgradeneeded
//     let transaction = db.transaction('bookStore', 'readwrite');
//     let books = transaction.objectStore('bookStore');
//
    // ============= Добавление объекта =========================
    // let book = {
    //     title: 'JS',
    //     cost: 35,
    //     created: new Date()
    // };
    // let request = books.add(book); // существует метод put (value, [key])
    // request.onsuccess = function () {
    //     console.log('Книга успешно добавлена', request.result);
    // }
    // request.onerror = function () {
    //     console.log('Ошибка', request.error);
    // }
    // ================================================================
    // получаем одну книгу с точным значением ключа
    // let request1 = books.get(3);
    // request1.onsuccess = function () {
    //     console.log('Книга найдена', request1.result)
    // };
    // request1.onerror = function () {
    //     console.log('Ошибка', request1.error)
    // };
    
    // получаем книги в диапазоне id < 5 и до конечной
    // let request2 = books.getAll(IDBKeyRange.upperBound(5, true));
    // request2.onsuccess = function () {
    //     console.log('Книги в диапазоне найдены', request2.result)
    // };
    // request2.onerror = function () {
    //     console.log('Ошибка', request2.error)
    // };
    
    // получаем все книги
    // let request3 = books.getAll();
    // request3.onsuccess = function () {
    //     console.log('Все книги найдены', request3.result)
    // };
    // request3.onerror = function () {
    //     console.log('Ошибка', request3.error)
    // };
    
    // ========================= поиск по индексу - наиболее распросранен =========================
    let transaction = db.transaction('bookStore', 'readwrite');
    let bookStore = transaction.objectStore('bookStore');

    let indexCost = bookStore.index('indexCost');

    let reguest = indexCost.getKey(15);

    reguest.onsuccess = function () {
        if (reguest.result !== undefined) {
            console.log('Результат поиска:', reguest.result);
            // удаление объекта из хранилища
            // let requestDelete = bookStore.delete(reguest.result);
        } else {
            console.log('Нет таких книг');
        }
    };
//     ===============================================================
};

resqueOpen.onupgradeneeded = function (event) {
    db = resqueOpen.result;
    switch (event.oldVersion) {
        case 0:
        console.log('База данных инициализирована!!');
        case 1:
            db.createObjectStore('books', {autoIncrement: true});
            console.log('Хранилище успешно создано!');
        case 2:
            db.deleteObjectStore('books');
        case 3:
            db.createObjectStore('bookStore', {autoIncrement: true});
        case 4:
            db.deleteObjectStore('bookStore');
            let bookStore = db.createObjectStore('bookStore', {autoIncrement: true});
    //         синтаксис создания индекса - objectStore.createIndex(name, keyPath, [options]);
            let index = bookStore.createIndex('indexCost', 'cost');
    }
}

//  Удаление базы данных
// let requestDelete = indexedDB.deleteDatabase('app');
// requestDelete.onsuccess = function () {
//     console.log('База данных успешно удалена.')
// }
// requestDelete.onerror = function () {
//     console.log('Не удалось удалить базу данных.')
// }
//
//  ================== Dark and white them on window
function toggle(on) {
    if (on) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

function save(on) {
    localStorage.setItem('darkTheme', on.toString());
}

function load() {
    return localStorage.getItem('darkTheme') === 'true';
}

function onChange(checkbox) {
    const value = checkbox.checked;
    toggle(value);
    save(value);
}

const initialValue = load();
toggle(initialValue);
document.querySelector('#darkTheme').checked = initialValue;

