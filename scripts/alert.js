function showAlert() {
    let userName = prompt("What's your username?");

    if (userName == null || userName == '') {
        
            alert("You're no authorized");
            return;
    } 

    let outputElement = document.getElementById('output');
      outputElement.textContent = `Your username: ${userName}`

}

// Регистрируем обработчик события на событие 'load' объекта window
if (!isMobileDevice()) {
    window.onload = showAlert();
};


function getText() {
    var userInput = document.getElementById('mobileInput').value;
    
    if (userInput.trim() !== '') {
        var outputElement = document.getElementById('output');
        outputElement.textContent = `Your username:  ${userInput}`;
    }
}

function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};









