

// function loadNewScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//
//     script.onload = () => callback(null, script);
//     script.onerror = () => callback(new Error(`Script download error! ${src}`));
//
//     document.head.append(script);
// }
// loadNewScript('myScript.js', function (error, script) {
//     if (error) {
//         alert('Error');
//     } else {
//         creatingPage();
//     }
// });

let isScriptLoaded = false;

function loadNewScript(src, callback) {
    if (isScriptLoaded) {
        return;
    }
    
    let script = document.createElement('script');
    script.src = src;
    
    script.onload = () => {
        isScriptLoaded = true;
        callback(null, script);
    };
    script.onerror = () => callback(new Error(`Script download error! ${src}`));
    
    document.head.append(script);
}
loadNewScript()



