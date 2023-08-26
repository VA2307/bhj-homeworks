const revealArr = Array.from(document.querySelectorAll('.reveal'));

function makeVisible() {
    for(let i = 0; i < revealArr.length; i++) {
        const {top} = revealArr[i].getBoundingClientRect();

        if(top > 0 && top < window.innerHeight) {
            revealArr[i].classList.add('reveal_active');
        } else {
            revealArr[i].classList.remove('reveal_active');
        }
    }
}

window.addEventListener('scroll', makeVisible);