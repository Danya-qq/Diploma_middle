const menu = () => {
    const headMenu = document.querySelector('.head'),
        callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form'),
        giftPopUp = document.getElementById('gift'),
        topAnchor = document.getElementById('totop'),
        gift = document.querySelector('.fixed-gift');

        headMenu.addEventListener('click', (event) => {
            let target,target2, target3;
            target = target2 = target3 = event.target;
            
            target = target.closest('.clubs-list');
            
                if(target) {
                    target.lastElementChild.style = 'display: block';
                };

                target2 = target2.closest('.callback-btn');

                if (target2) {
                    callbackForm.style = 'display: flex';
                };

                target3 = target3.closest('.free-visit');

                if (target3) {
                    freeVisitForm.style = 'display: flex;'
                }
            
            })

    // обработка якоря на главный слайд

    topAnchor.style = 'display: none';

    window.addEventListener('scroll', () => {
        // console.log(window.pageYOffset);
        
        if (window.pageYOffset > 700) {
            topAnchor.style = 'display: block';
        } else {
            topAnchor.style = 'display: none';
        }
    });

    gift.addEventListener('click', () => {
        giftPopUp.style = 'display: flex;'
    });   
}

export default menu;

