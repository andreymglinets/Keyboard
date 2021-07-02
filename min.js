let keys = document.querySelectorAll('.numbers_first_line');
let liters = document.querySelectorAll('.liters_second_line');
let output = document.getElementById('textBox');
let backsp = document.querySelector('#backspace');
let tab = document.querySelector('#tab');
let thirdLiters = document.querySelectorAll('.liters_third_line');
let fourtLiters = document.querySelectorAll('.liters_fourth_line');


for (let key of keys){
    key.onmousedown = () => {
        output.value += key.innerText;
    }
}
for (let key of liters){
    key.onmousedown = () => {
        output.value += key.innerText;
    }
}
for (let key of thirdLiters){
    key.onmousedown = () => {
        output.value += key.innerText;
    }
}
for (let key of fourtLiters){
    key.onmousedown = () => {
        output.value += key.innerText;
    }
}

function back(){
    output.value = output.value.slice(0, - 1);
};

var timer;
backsp.onmousedown = () => {
    output.value = output.value.slice(0, - 1);
    timer = setInterval (back, 100);
};

backsp.onmouseup = () => {
        clearInterval(timer);
};


let space = document.getElementById('space');

space.onmousedown = () => {
    output.value += " ";
}

tab.onmousedown = () => {
    output.value += '\t';
}

