const slider = () => {
    const slides = document.querySelector('.main-slider').children;
    let currentSlide = 0,
    interval;
    console.log(slides);
    

    const prevSlide = (elem, index, display) =>{
        elem[index].style = display;
    };

    const nextSlide = (elem, index, display) =>{
        elem[index].style = display;    
    };
    
    const autoPlaySlide = () =>{
        prevSlide(slides, currentSlide, 'display: none');
        
        currentSlide++;

        if (currentSlide >= slides.length){
            currentSlide = 0;
        };
        
        nextSlide(slides, currentSlide, 'display: flex');

    };

    const startSlide = (time = 3000) =>{
        interval = setInterval(autoPlaySlide, time);
    };
    
    startSlide();
    
};

export default slider;

