const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const outputBox1 = document.getElementById("outputBox1");
const outputBox2 = document.getElementById("outputBox2");

let btn1Pressed = false;
let btn2Pressed = false;
let btn9Pressed = false;
let btn10Pressed = false;

function showImage() {
    if (btn1Pressed && btn9Pressed) {
        outputBox1.innerHTML = '<img src="durhamunilogo.jpg" alt="Durham University Logo" class="output-image">';
        resetOutputBtnStates();
    } else if (btn1Pressed && btn10Pressed) {
        outputBox2.innerHTML = '<img src="durhamunilogo.jpg" alt="Durham University Logo" class="output-image">';
        resetOutputBtnStates();
    } else if (btn2Pressed && btn9Pressed) {
        outputBox1.innerHTML = '<img src="macbookpro.jpg" alt="laptop" class="output-image">';
        resetOutputBtnStates();
    } else if (btn2Pressed && btn10Pressed) {
        outputBox2.innerHTML = '<img src="macbookpro.jpg" alt="laptop" class="output-image">';
        resetOutputBtnStates();
    }
}

function resetOutputBtnStates() {
    btn9Pressed = false;
    btn10Pressed = false;
}

function resetInputButtons() {
    btn1.classList.remove("button-activated");
    btn2.classList.remove("button-activated");
}

function resetOutputButtons() {
    btn9.classList.remove("button-activated");
    btn10.classList.remove("button-activated");
}

btn1.addEventListener("click", () => {
    resetButtons();
    btn1.classList.add("button-activated");
    btn1Pressed = true;
});

btn2.addEventListener("click", () => {
    resetButtons();
    btn2.classList.add("button-activated");
    btn2Pressed = true;
});

btn9.addEventListener("click", () => {
    if (btn1Pressed || btn2Pressed) {
        btn9.classList.add("button-activated");
        btn9Pressed = true;
        showImage();
    }
});

btn10.addEventListener("click", () => {
    if (btn1Pressed || btn2Pressed) {
        btn10.classList.add("button-activated");
        btn10Pressed = true;
        showImage();
    }
});

function resetButtons() {
    btn1.classList.remove("button-activated");
    btn2.classList.remove("button-activated");
    btn9.classList.remove("button-activated");
    btn10.classList.remove("button-activated");
    btn1Pressed = false;
    btn2Pressed = false;
    btn9Pressed = false;
    btn10Pressed = false;
}

