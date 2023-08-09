let counter = document.getElementById('clicker__counter');
let cookieImg = document.getElementById('cookie');
let cpsCounter = document.getElementById('cps__counter')
let startTime = Date.now();

function cookieClicker() {
    counter.textContent++;
    if(cookieImg.width === 200) {
        cookieImg.width = 250;
    } else {
        cookieImg.width = 200;
    }
    updateCPS()
}

function updateCPS() {
    let currentTime = Date.now();
    let counterText = counter.textContent;
    let elapsedTime = (currentTime - startTime) / 1000;
    let cps = counterText / elapsedTime;
    cpsCounter.textContent = cps.toFixed(2);
  }

cookieImg.onclick = cookieClicker;
