const burgerMenu = () => {
    const burgerMenu = document.querySelector('.menu-button'),
        screenWidth = document.documentElement.clientWidth,
        nav = document.querySelector('.top-menu'),
        popUpMenu = document.querySelector('.popup-menu');

    if (screenWidth < 768) {  
        burgerMenu.style = 'display: block';
        burgerMenu.previousElementSibling.style = 'display: none'; 
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 237) {
                nav.style = `position: fixed`;
            } else {
                nav.style = `position: relative`;
            };
        });   
    };
    
    burgerMenu.addEventListener('click', () => {
        popUpMenu.style = 'display: flex';
    });

    popUpMenu.addEventListener('click', (event) => {
        let target = event.target;
        
        if (target.matches('img, a')) {
            popUpMenu.style = 'display: none';
        };   
    });
  
};

export default burgerMenu;