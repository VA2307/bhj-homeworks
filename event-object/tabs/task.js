const tabArr = Array.from(document.querySelectorAll('.tab'));
const tabContentArr = Array.from(document.querySelectorAll('.tab__content'));

for(let i = 0; i < tabArr.length; i++) {
    tabArr[i].addEventListener('click', () => {
        for(let indexTwo = 0; indexTwo < tabArr.length; indexTwo++) {
            if(tabArr[indexTwo].classList.contains('tab_active')) {
                tabArr[indexTwo].classList.remove('tab_active');
            }
        }

        tabArr[i].classList.add('tab_active');

        if(tabArr.length === tabContentArr.length) {

            for(let indexTwo = 0; indexTwo < tabArr.length; indexTwo++) {
                
                if(tabContentArr[indexTwo].classList.contains('tab__content_active')) {
                    tabContentArr[indexTwo].classList.remove('tab__content_active');
                }
            }

            tabContentArr[i].classList.add('tab__content_active');
        }
    });
}