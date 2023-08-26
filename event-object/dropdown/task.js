const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
});

function dropdownBehavoir(e) {
    e.preventDefault();
    dropdownValue.textContent = e.target.textContent;
    dropdownList.classList.remove('dropdown__list_active');
}

dropdownList.addEventListener('click', dropdownBehavoir);