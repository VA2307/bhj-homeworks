function timerOn() {
    let timer = document.getElementById('timer');
    let timerValue = timer.textContent;

    if(timerValue > 0) {
        timer.textContent--;
        timerValue--;
    }

    if(timerValue === 0) {
        // Чтобы счетчик успевал стать 0 перед алертом
        setTimeout(() => alert('Вы победили в конкурсе!'), 500)
    }
}

setInterval(timerOn, 1000);