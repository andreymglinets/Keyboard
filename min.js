let keys = document.querySelectorAll('.numbers_first_line');
let output = document.getElementById('textBox');
let backsp = document.querySelector('#backspace');



for (let key of keys){
    key.onmousedown = () => {
        output.value += key.innerText;
    }
}
backsp.onmousedown = () =>{
    output.value = output.value.slice(0, - 1);
}



