function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};



function showAlert() {
    let userName = prompt("What's your username?");
    if (userName == null || userName == '') {
            let notAuthorized = `You're no authorized.`;
            alert(notAuthorized);
            let outputElement = document.getElementById('output');
      outputElement.textContent = notAuthorized
        return;
    } 
    


    let outputElement = document.getElementById('output');
      outputElement.textContent = `Your username: ${userName}`
      

}


// Регистрируем обработчик события на событие 'load' объекта window
// онли для пк, на телефах отключено
if (!isMobileDevice()) {
    window.onload = showAlert();
};


function getText() {
    let userInput = document.getElementById('mobileInput').value;
    
    if (userInput.trim() !== '') {
        let outputElement = document.getElementById('output');
        outputElement.textContent = `Your username:  ${userInput}`;
    }
    
}











