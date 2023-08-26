const rotatorCaseArr = Array.from(document.querySelectorAll('.rotator__case'));

function switchCase() {
    const activeCase = document.querySelector('.rotator__case_active');
    const nextCase = activeCase.nextElementSibling || rotatorCaseArr[0];

    activeCase.classList.remove('rotator__case_active');
    nextCase.classList.add('rotator__case_active');

    const speed = nextCase.dataset.speed;
    nextCase.style.color = nextCase.dataset.color;

    setTimeout(switchCase, speed);
}

const firstIterationSpeed = document.querySelector('.rotator__case_active').dataset.speed;
setTimeout(switchCase, firstIterationSpeed)