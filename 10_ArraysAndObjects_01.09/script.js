console.log("==== Regular function ====");
console.log(multiply(3,4));


function multiply(a, b){
    return a * b;
}

console.log(multiply(2, 5));

console.log("==== Arrow function ====");

// console.log(multiplyArrow(4, 4)); // до объявления стрелочной функции ее нельзя использовать

const multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(4, 4));

console.log("==== Object ====");

const obj = {
    userName: 'John',
    seyHello: function(){
        console.log(this);
    }
}

obj.seyHello();

const objArrow = {
    userName: 'John',
    seyHello: () => console.log(this) // выведет объект window
}

objArrow.seyHello();


console.log("==== Object 2 ====");

const person = {
    firstName: 'Bill',
    lastName: 'Brown',
    age: 34,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`
    }
}

let arr = Object.keys(person);
console.log(arr);

arr = Object.values(person);
console.log(arr);

arr = Object.entries(person);
console.log(arr);

console.log("==== Array methods 2 ====");
arr = ['one', 'two', 'threE', 'eight', 'tHree', 'three', 'six'];

console.log('=== indexOf ===');
 
let res = arr.indexOf('three');
console.log(res);