console.log('Hello world!');
console.log(5 + 4);

// однострочный комментарий
/* 
   многострочный комментарий
*/

console.log(document.body);

// document.body.innerHTML = '<h1>Hello world!</h1>';

/*
    var - переменные (глобальные, deprecated)

    let - переменные (блочные)
    const - константа (не может быть переопределена)
*/

let a = 10;
a = '5';

const div1 = document.getElementById('div1');
console.log(div1);
div1.style.border = '1px solid black';

// Маркер, по которому можно найти элемент на странице
const div1Query = document.querySelector('#div1');
console.log(div1Query);

const pDiv1 = document.querySelectorAll('#div1 > p');
console.log(pDiv1.length);

for (let i = 0; i < pDiv1.length; i++) {
    pDiv1[i].innerHTML = `<span>new text ${i + 1}</span>`
    
}

const children = div1.children;
console.log(children.length);

const t = setInterval(move, 20);
let pos = 0;
let flag = true;
const box = document.getElementById('box');

setInterval(printTime, 1000);

function move(){
    if(flag){
        pos++;
        if(pos === 150){
            flag = false;
        }
        box.style.top = pos + 'px';
        box.style.left = pos + 'px';
    } else{
        pos--;
        if(pos === 0){
            flag = true;
        }
        box.style.top = pos + 'px';
        box.style.left = pos + 'px';
    }
}



function printTime(){
    const d = new Date();
    const h = d.getHours() > 9 ? d.getHours() : '0' + d.getHours();
    const m = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes();
    const s = d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds();

    const time = `${h}:${m}:${s}`;

    const h1 = document.createElement('h1');
    h1.innerText = time;
    h1.style.margin = '10px auto 0';
    h1.style.width = 'fit-content';


    if(document.body.children === 3){
        document.body.appendChild(h1);
    } else {
        document.body.replaceChild(h1, document.body.lastElementChild)
    }
}
