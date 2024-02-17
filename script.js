function openRandomLink() {
    const randomNumber = Math.floor(Math.random() * 5);
    let numWord;
    numWord = (randomNumber == 0) ? 'Never Gonna Give You Up!' :
              (randomNumber == 1) ? 'Mean gachista music' :
              (randomNumber == 2) ? 'In Donetsk they are investigating whether fans shouted “Sieg Heil”' :
              (randomNumber == 3) ? 'MID TRENT THIS IS GREAT' :
              (randomNumber == 4) ? 'Escalator Spin' : undefined;
              

    console.log(randomNumber + `: ${numWord}`);

    switch(randomNumber) {
        case 0:
            window.open('https://youtu.be/dQw4w9WgXcQ?si=RobsGAr9oRB5KhS8', '_blank');
            break;
        
        case 1:
            window.open('https://youtu.be/qEt2RRbWdlo?si=DTyKAZsMJmP0HMRk', '_blank');
            break;

        case 2:
            window.open('https://youtu.be/RrfiNdAhgJA?si=G4H4ft3dSIWPb7yI', '_blank');
            break;

        case 3: 
            window.open('https://youtu.be/MHwE31u6OJE?si=tF5w-Lm3BwJfG_x8', '_blank');
            break;

        case 4: 
            window.open('https://youtu.be/1z7HNHpBJQc?si=qU4frhtJhUrGZTg0', '_blank');
            break;

        default:
            alert("пососi");
            break;
    }
};

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
  }


function sendForm() {
    alert('Thank you for your feedback');
    console.log('Log sent')
}


  window.addEventListener('load', function() {
    var userInfo = {
        userAgent: navigator.userAgent,
        screenSize: {
            width: window.screen.width,
            height: window.screen.height
        },
        windowSize: {
            width: window.innerWidth,
            height: window.innerHeight
        },
        language: navigator.language,
        currentUrl: window.location.href,
        referrerUrl: document.referrer,
        loadTime: new Date().toLocaleString()
    };

    sendUserInfoToServerAndLog(userInfo);
});

function sendUserInfoToServerAndLog(userInfo) {
    var jsonStrUser = JSON.stringify(userInfo);
    console.log(jsonStrUser);

    fetch('http://localhost:3000/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: jsonStrUser,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data); // 'Data received and logged successfully'
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });
}

