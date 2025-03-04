let Outputscreen = document.querySelector(".outputscreen");

function display(num) {
    Outputscreen.value += num;
}

function calculate() {
    try {
        if (Outputscreen.value.trim() === "") {
            Outputscreen.value = "0"; 
        } else {
            Outputscreen.value = eval(Outputscreen.value);
        }
    } catch (err) {
        Outputscreen.value = "Error"; 
    }
}

function clearScreen() {
    Outputscreen.value = "";
}

function deleteLast() {
    Outputscreen.value = Outputscreen.value.slice(0, -1);
}
