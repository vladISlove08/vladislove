function showAlert() {
    let userName = prompt("What's your username?");
    

    if (userName == null || userName == '') {
        alert("You didn't write your username")
        userName = prompt("Write your username");
        if(userName == null || userName == '') {
            alert("You're no authorized");
            return;
        };
        

        

    } 

    let outputElement = document.getElementById('output');
      outputElement.textContent = `Your username: ${userName}`

}

// Регистрируем обработчик события на событие 'load' объекта window
window.onload = showAlert();




