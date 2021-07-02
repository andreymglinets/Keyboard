let keys = document.querySelectorAll('.numbers_first_line');
let output = document.getElementById('textBox');
let backsp = document.querySelector('#backspace');


for (let key of keys){
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
    timer = setInterval (back, 150);
};

backsp.onmouseup = () => {
        clearInterval(timer);
};


let space = document.getElementById('space');

space.onmousedown = () => {
    output.value += " ";
}



