function appendToDisplay(value) {
    const display = document.getElementById('display');
    const lastChar = display.value[display.value.length - 1];

    // Cek apakah karakter terakhir adalah operator
    if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
        return; // Jika ya, jangan tambahkan operator baru
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

document.getElementById("showPopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});