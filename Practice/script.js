function makeCounter (count){
    return function (){
        return count++;
    }
}

let counter = makeCounter(0);
let counter2 = makeCounter(0);

let res = counter();
console.log(res);
console.log(counter());