console.log('Hello world!');

// undefined
let x;
console.log(x);

x = 7;
x = 'bye';
console.log(x);

const pi = 3.1415926;
// pi = 3.14 пример ошибки!

let y = x;

console.log(y);

console.log('pi = ' + pi);

const exp = pi;

// ''   ""    ``

// "x = x"

// `x = ${x}`

console.log(`exp = ${exp} or ${pi}`);
// console.log('exp = ' + exp + ' or ' + pi);

x = true;
console.log(x);

x = null;
console.log(x);

let res = 7 % 2; // остаток от деления
console.log(`res = ${res}`);

res = 'true' + 5;
console.log(`res = ${res}`);

res = true + 5; // false - 0, true - 1
console.log(`res = ${res}`);

// строгое неравенство
x = '2' === 2;
console.log(`x = ${x}`);

// нестрогое неравенство
x = '2' == 2;
console.log(`x = ${x}`);

res = 5 + ''; // String(5)
console.log(typeof res);

res = +'5'; // Number(5)
console.log(res);

// console.log(10 + 5 + +res);

switch (res) {
    case 5:
        console.log(`number: ${res}`);
        break;
    case '5':
        console.log(`string: ${res}`);
        break;
    default:
        console.log("It's not a 5");
}

let age = 16;
let vol = age > 16 ? 42 : 1.5
console.log(`vol = ${vol}`);

// if (age > 16) {
//     return 42;
// } else {
//     return 1.5;
// }

console.log(+pi.toFixed(2));

++age;
age++;

x = 10;
res = x++ + ++x; // 10 + 12 = 22
console.log(`res = ${res}`);

x = 10;
y = 5;

res = add(x, y);
console.log(`res = ${res}`);

function add(a, b) {
    return a + b;
}

x = !!x; // неявное приведение переменной к boolean значению
console.log(x);

let example = 'hello';
console.log(!!example);

// false = 0, -0, '', false, null, NaN, undefined

let userName = null;
let nickName = userName || 'Anonymous';

greeting();
greeting('Rabindranat');

function greeting(nickName1 = 'Anonymous') {
    console.log(`Hello ${nickName1}`);
}


// Home work
console.log("===== HW =====");

res = sumDigits(1234);
console.log(`res = ${res}`); // Ожидаем увидеть 10

res = luckyNumber(123321); // 1 + 2 + 3 === 8 + 7 + 1
console.log(res ? 'Lucky' : 'Unlucky');

console.log(banana());

function sumDigits(x){
    let sum = 0;
    while (x > 0) {
        sum += x % 10
        x = Math.floor(x/10)
        // or x = (x - x % 10) / 10;
    }
    return sum;
}

function luckyNumber(x) {

let secondHalf = x % 1000;
let firstHalf = (x - secondHalf) / 1000;

return sumDigits(secondHalf) === sumDigits(firstHalf);

//    const res = (x + "").split('');
//    let num1 = 0;
//    let num2 = 0;
//     for (let index = 0; index < res.length; index++) { 
//         if(index <= 2){
//             num1 += +res[index];
//         } else {
//             num2 += +res[index];
//         }
//     }
//     return num1 === num2;

}



function banana() {
    let a = 'a';
    let b = 'b';
    return `${(b + a)+ +a + a}`.toLowerCase();
}

function returnNumber(x){
    // x = 4 || x = 7  если 4 то вернуть 7 и наоборот, не используя операторы сравнения
    return 11 - x;
}


