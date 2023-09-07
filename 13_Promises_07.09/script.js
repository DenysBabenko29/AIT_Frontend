function getFiveAfterSevenSecond(){
    setTimeout(() => 5, 7000);
}

let res = getFiveAfterSevenSecond();
console.log(res);

console.log("======= promise ========");

let promise = new Promise(function(resolved, reject){
    setTimeout(() => {
        resolved(5);
    }, 2000);
})

console.log(promise);

promise.then((value => value + 10)).then(value => console.log(value / 12))

let promise2 = new Promise(function(resolved, reject){
    setTimeout(() => {
        reject(new Error('Ошибка'));
    }, 2000);
})

promise2.then(v => console.log(v));
promise2.catch(err => console.log(err))