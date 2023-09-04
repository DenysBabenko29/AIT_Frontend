let x = "text";
// boolean, string, number, bigInt, undefined, null, symbol
let y = 9;
y = 9.2;

let z = 9n;
z = 9.2;
console.log(z);

// Преобразование типов
// в строку
// неявное:
let str1 = 9 + ''; // "9"
// явное:
let str2 = String(9); // "9"
let str3 = String(true); // "true"
console.log(str3);
// преобразование в число:
// неявное:
let num1 = +"9"; // 9 число
let sum = +"9" + +"18";
console.log(sum); // 27 число
// явное:
let num2 = Number("9"); // 9
let num3 = Number(true); // 1
console.log(num3); 
let num4 = Number(false); // 0
console.log(num4);
let num5 = Number("1j%#12");
console.log(num5); // NaN - not a number
let num6 = Number(null);
console.log(num6); // 0 
let num7 = Number("");
console.log(num7); // 0
console.log("======");
let num8 = Number(undefined);
console.log(num8); // 0

// boolean 
// явное преобразование в булеан
const b1 = Boolean("text");
console.log(b1); // true
const b2 = Boolean("");
console.log(b2); // false
const b3 = Boolean(10);
console.log(b3); // true
const b4 = Boolean(-10);
console.log(b4); // true
const b5 = Boolean(0);
console.log(b5); // false
const b6 = Boolean(NaN); // false
const b7 = Boolean(null); // false
const b8 = Boolean(undefined); // false
// falsy values - те которые преобразуются в false
// "", 0, NaN, undefined, null
// thruthy - все остальные, которые преобразуются в тру
// неявные преобразования к булеан:
const name1 = undefined;
if(name1){
  console.log("Добрый день " + name1);
} else {
  console.log("Нет имени"); // этот вариант 
}

const name2 = "Vladimir";
if(name2){
  console.log("Добрый день " + name2); // этот вариант 
} else {
  console.log("Нет имени"); 
}

// другой вариант неявного в булеан
console.log(!null && true ); // true
console.log("Apple" && true); // true

// Когда мы получаем undefined а когда null
let v1; // объявление переменной === декларация
console.log(v1); // undefined
// 
const arr = ["apple", "orange"];
console.log(arr[4]); // undefined

// забегая в перед
const user = {name: "Fedor"};
console.log(user.name); // "Fedor"
console.log(user.age); // undefined

// Можем вручную 
let v2 = undefined;
let v3 = null;


// нал мы получали, document.getElementById("несуществующий-id");
// null - получаем в основном, когда метод не нашел ничего - он возвращает нам null

// Операторы сравнения === - строгое равенство, == - нестрогое
// === строгое равенстово - если у значений разные типы - сразу будет false
console.log(9 === "9"); // false
// == 
console.log(9 == "9"); // true - все проебразовалось к строке
// string <-- number <-- boolean
console.log(1 == true); // true - все преобразовалось к числу
console.log(Number(true)); // 1