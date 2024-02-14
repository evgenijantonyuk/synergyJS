
function loadNewScript(src) {
    return new Promise(function (resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        
        script.onload = () => resolve(script);
        script.onerror = () => reject(Error(`Script download error ${src}`));
        
        document.head.append(script);
    })
}

loadNewScript("myScript.js")

    .then(function (script) {
        return loadNewScript("shortFunction.js");
    })
    .then(function (script) {
        return loadNewScript("shortFunction2.js");
    })
    .then(function (script) {
        creatingPage();
        shortFunction();
        shortFunction2();
    })
    .catch(err => alert(err))















