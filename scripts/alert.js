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
window.onload = showAlert();

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

function toggleInputVisibility() {
    let mobileInput = document.getElementById('mobileInput');
    let mobileButton = document.getElementById('mobileButton');
    
    if (isMobileDevice()) {
        mobileInput.style.display = 'block';
        mobileButton.style.display = 'block'; // Отображаем поле ввода на мобильных устройствах
    } else {
        mobileInput.style.display = 'none'; 
        mobileButton.style.display = 'none';// Скрываем поле ввода на других устройствах
    }
};

function toggleInputVisibilitypc() {
    let computerButton = document.getElementById('computerButton');
    
    
    if (isMobileDevice()) {
     
        computerButton.style.display = 'none';// Скрываем поле ввода на других устройствах
    } else {
        
        computerButton.style.display = 'block';// Скрываем поле ввода на других устройствах
    }
};

toggleInputVisibility();
toggleInputVisibilitypc();







