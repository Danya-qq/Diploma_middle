const menu = () => {
    const headMenu = document.querySelector('.head'),
        callbackForm = document.getElementById('callback_form'),
        freeVisitForm = document.getElementById('free_visit_form'),
        giftPopUp = document.getElementById('gift'),
        topAnchor = document.getElementById('totop'),
        gift = document.querySelector('.fixed-gift'),
        clubsList = document.querySelector('ul');

        headMenu.addEventListener('click', (event) => {
            let target,target2, target3;
            target = target2 = target3 = event.target;
            
            target = target.closest('.clubs-list');

                if(target) {  
                    clubsList.style.display = (clubsList.style.display !== 'block') ? 'block' : 'none';   
                }

                if (target === null) {
                    clubsList.style = 'display: none'; 
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

        if (window.pageYOffset > 700) {
            topAnchor.style = 'display: block';
        } else {
            topAnchor.style = 'display: none';
        }
    });

    gift.addEventListener('click', () => {
        giftPopUp.style = 'display: flex;';
        gift.style = 'display: none';
    });   
}

export default menu;

