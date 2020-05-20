const slider = () => {
    const slider = document.querySelector('.gallery-slider');
    const slides = slider.querySelectorAll('.slide');
    const mainSlider = document.querySelector('.main-slider').children;
    let dot = document.querySelectorAll('.dot');
   
    
    let currentSlide = 0,
    interval;

    slides.forEach((elem) => {
        elem.style = 'display: none'
    });

    slides[0].style = 'display: flex';

    const prevSlide = (elem, index, display) =>{
        
        if (elem[index].tagName === 'LI') {
            elem[index].classList.remove('slick-active')
            
        } else {
            elem[index].style = display;
        }
    };

    const nextSlide = (elem, index, display) =>{
       
        if (elem[index].tagName === 'LI') {
            elem[index].classList.add('slick-active')
        } else {
            elem[index].style = display; 
        }

    };
    
    const autoPlaySlide = () =>{
        prevSlide(slides, currentSlide, 'display: none');
        prevSlide(mainSlider, currentSlide, 'display: none');
        prevSlide(dot, currentSlide);

        
        currentSlide++;

        if (currentSlide >= slides.length){
            currentSlide = 0;
        };
        
        nextSlide(slides, currentSlide, 'display: flex');
        nextSlide(mainSlider, currentSlide, 'display: flex');
        nextSlide(dot, currentSlide);


    };

    const startSlide = (time = 3000) =>{
        interval = setInterval(autoPlaySlide, time);
    };
    
    const stopSlide = () =>{
        clearInterval(interval);
    };
    

    slider.addEventListener('click', (event) =>{
        event.preventDefault();
       
        let target = event.target;

        if(!target.matches('#right, #left, button, #arrow-right, #arrow-left')){ //  проверяем, кликнули ли по одному из элементов с указанным классом
            return;
        }
      
        prevSlide(slides, currentSlide, 'display: none');
        prevSlide(dot, currentSlide);

        if (target.matches('#right, #arrow-right')){
            currentSlide++;
        } else if (target.matches('#left, #arrow-left')){
            currentSlide--;
        } else if(target.matches('button, .dot')){
        
            dot.forEach((elem, index) =>{
         
                if (elem === target.closest('.dot')){
                    currentSlide = index;
                }
            })
        };

        if(currentSlide >= slides.length){
            currentSlide =0;
        }

        if(currentSlide <0){
            currentSlide = slides.length -1
        }

        nextSlide(slides, currentSlide, 'display: flex');
        nextSlide(dot, currentSlide);

    });

    slider.addEventListener('mouseover', (event) =>{
        if(event.target.matches('#left, #right, .slider-arrow') || 
        event.target.matches('button, .dot')){
            stopSlide()
        }
    });


    slider.addEventListener('mouseout', (event) =>{
        if(event.target.matches('#left, #right, .slider-arrow') || 
        event.target.matches('button, .dot')){
            startSlide()
        };   
    });

    startSlide();
    

};

export default slider;

