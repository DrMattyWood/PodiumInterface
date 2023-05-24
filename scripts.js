const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn9 = document.getElementById("btn9");
const btn10 = document.getElementById("btn10");
const outputBox1 = document.getElementById("outputBox1");
const outputBox2 = document.getElementById("outputBox2");
const outputBox3 = document.getElementById("outputBox3");
const nowShowing1 = document.getElementById("nowShowing1");
const nowShowing2 = document.getElementById("nowShowing2");

let selectedSource = null;

// Event listeners for input buttons:
[btn1, btn2, btn3, btn4].forEach((btn) => {
    btn.addEventListener('click', () => {
        if (selectedSource === btn) {
            selectedSource = null;
            btn.classList.remove('button-activated');
            outputBox3.innerHTML = "";
        } else {
            if (selectedSource) {
                selectedSource.classList.remove('button-activated');
            }
            selectedSource = btn;
            btn.classList.add('button-activated');
            showImage(outputBox3, selectedSource);
        }
    });
});

// Event listeners for output buttons:
[btn9, btn10].forEach((btn) => {
    btn.addEventListener('click', () => {
        if (selectedSource) {
            if (btn === btn9) {
                showImage(outputBox1, selectedSource);
                nowShowing1.innerHTML = 'Now Showing: ' + getInputName(selectedSource);
            } else if (btn === btn10) {
                showImage(outputBox2, selectedSource);
                nowShowing2.innerHTML = 'Now Showing: ' + getInputName(selectedSource);
            }
        }
    });
});

function getInputName(btn) {
    if (btn === btn1) {
        return 'Main PC';
    } else if (btn === btn2) {
        return 'Laptop HDMI';
    } else if (btn === btn3) {
        return 'Wireless Presentation';
    } else if (btn === btn4) {
        return 'Visualiser';
    }
}

function showImage(outputBox, sourceBtn) {
    if (sourceBtn === btn1) {
        outputBox.innerHTML = '<img src="mainpcscreen.jpeg" alt="Main PC Screen" class="output-image">';
    } else if (sourceBtn === btn2) {
        outputBox.innerHTML = '<img src="laptopscreen.jpeg" alt="Laptop HDMI Screen" class="output-image">';
    } else if (sourceBtn === btn3) {
        outputBox.innerHTML = '<img src="solsticescreen.jpeg" alt="Wireless Presentation Screen" class="output-image">';
    } else if (sourceBtn === btn4) {
        outputBox.innerHTML = '<img src="visualiserpen.jpeg" alt="Visualiser Screen" class="output-image">';
    }
}


/*



// ... your existing code ...

// Updated event listeners for input buttons:
[btn1, btn2, btn3, btn4].forEach((btn, i) => {
    btn.addEventListener('click', () => {
        [btn1Pressed, btn2Pressed, btn3Pressed, btn4Pressed] = [false, false, false, false]; // reset all to false
        btn.classList.add('button-activated'); // highlight the button

        // Update the pressed button status and current input name
        if (btn === btn1) {
            btn1Pressed = true;
            currentInputName = 'Main PC';
        } else if (btn === btn2) {
            btn2Pressed = true;
            currentInputName = 'Laptop HDMI';
        } else if (btn === btn3) {
            btn3Pressed = true;
            currentInputName = 'Wireless Presentation';
        } else if (btn === btn4) {
            btn4Pressed = true;
            currentInputName = 'Visualiser';
        }

        // Update the outputs if they are active
        if (btn9Pressed) {
            lastPressedSourceBtn9 = btn;
            nowShowing1.innerHTML = 'Now Showing: ' + currentInputName;
        }
        if (btn10Pressed) {
            lastPressedSourceBtn10 = btn;
            nowShowing2.innerHTML = 'Now Showing: ' + currentInputName;
        }
        showImage(); // Update the images
    });
});

// Updated event listeners for output buttons:
[btn9, btn10].forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn1Pressed || btn2Pressed || btn3Pressed || btn4Pressed) { // Check if a source is selected
            btn.classList.add('button-activated'); // highlight the button

            // Assign the last selected source to the pressed output button
            if (btn === btn9) {
                btn9Pressed = true;
                lastPressedSourceBtn9 = [btn1, btn2, btn3, btn4].find(btn => btn.classList.contains('button-activated'));
                nowShowing1.innerHTML = 'Now Showing: ' + currentInputName;
            } else if (btn === btn10) {
                btn10Pressed = true;
                lastPressedSourceBtn10 = [btn1, btn2, btn3, btn4].find(btn => btn.classList.contains('button-activated'));
                nowShowing2.innerHTML = 'Now Showing: ' + currentInputName;
            }
            showImage(); // Update the images
        }
    });
});

function showImage() {
    if (lastPressedSourceBtn9 === btn1) {
        outputBox1.innerHTML = '<img src="mainpcscreen.jpeg" alt="Main PC Screen" class="output-image">';
        nowShowing1.innerHTML = "Now Showing: Main PC";
    } else if (lastPressedSourceBtn9 === btn2) {
        outputBox1.innerHTML = '<img src="laptopscreen.jpeg" alt="Laptop HDMI Screen" class="output-image">';
        nowShowing1.innerHTML = "Now Showing: Laptop HDMI";
    } else if (lastPressedSourceBtn9 === btn3) {
        outputBox1.innerHTML = '<img src="solsticescreen.jpeg" alt="Wireless Presentation Screen" class="output-image">';
        nowShowing1.innerHTML = "Now Showing: Wireless Presentation";
    } else if (lastPressedSourceBtn9 === btn4) {
        outputBox1.innerHTML = '<img src="visualiserpen.jpeg" alt="Visualiser Screen" class="output-image">';
        nowShowing1.innerHTML = "Now Showing: Visualiser";
    }

    if (lastPressedSourceBtn10 === btn1) {
        outputBox2.innerHTML = '<img src="mainpcscreen.jpeg" alt="Main PC Screen" class="output-image">';
        nowShowing2.innerHTML = "Now Showing: Main PC";
    } else if (lastPressedSourceBtn10 === btn2) {
        outputBox2.innerHTML = '<img src="laptopscreen.jpeg" alt="Laptop HDMI Screen" class="output-image">';
        nowShowing2.innerHTML = "Now Showing: Laptop HDMI";
    } else if (lastPressedSourceBtn10 === btn3) {
        outputBox2.innerHTML = '<img src="solsticescreen.jpeg" alt="Wireless Presentation Screen" class="output-image">';
        nowShowing2.innerHTML = "Now Showing: Wireless Presentation";
    } else if (lastPressedSourceBtn10 === btn4) {
        outputBox2.innerHTML = '<img src="visualiserpen.jpeg" alt="Visualiser Screen" class="output-image">';
        nowShowing2.innerHTML = "Now Showing: Visualiser";
    }

    // Display in outputBox3:
    if (btn1Pressed) {
        outputBox3.innerHTML = '<img src="mainpcscreen.jpeg" alt="Main PC Screen" class="output-image">';
    } else if (btn2Pressed) {
        outputBox3.innerHTML = '<img src="laptopscreen.jpeg" alt="Laptop HDMI Screen" class="output-image">';
    } else if (btn3Pressed) {
        outputBox3.innerHTML = '<img src="solsticescreen.jpeg" alt="Wireless Presentation Screen" class="output-image">';
    } else if (btn4Pressed) {
        outputBox3.innerHTML = '<img src="visualiserpen.jpeg" alt="Visualiser Screen" class="output-image">';
    }
}



function resetInputButtons() {
    btn1.classList.remove("button-activated");
    btn2.classList.remove("button-activated");
    btn3.classList.remove("button-activated");
    btn4.classList.remove("button-activated");
    btn1Pressed = false;
    btn2Pressed = false;
    btn3Pressed = false;
    btn4Pressed = false;
}

*/
