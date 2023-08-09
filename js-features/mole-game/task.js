function getHole(index) {
  return document.getElementById(`hole${index}`);
}


for(let i = 1; i <= 9; i++) {
    let hole = getHole(i);

    hole.onclick = function() {
        let deadsCounter = document.getElementById('dead');
        let deadsCount = deadsCounter.textContent;
        let lostCounter = document.getElementById('lost');
        let lostCount = lostCounter.textContent;


        if(hole.classList.contains('hole_has-mole')) {
            deadsCounter.textContent++;
            deadsCount++
        } else {
            lostCounter.textContent++;
            lostCount++;
        }

        if(deadsCount === 10) {
            setTimeout(() => alert('Поздравляем, Вы выйграли!'), 10);
            deadsCounter.textContent = 0;
            lostCounter.textContent = 0;
        } else if (lostCount === 5) {
            setTimeout(() => alert('Вы проиграли, попробуйте еще!'), 10);
            deadsCounter.textContent = 0;
            lostCounter.textContent = 0;
        }
    };
}
