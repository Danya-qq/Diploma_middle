const servicesSlider = (minWidth = 223) => {
    const   slide = document.querySelectorAll('.services-slider .slide'),
            slider = document.querySelector('.services-slider'),
            sliderWrapper = document.querySelector('#services .wrapper'),
            maxWidth = minWidth*(slide.length-5);
    let prevArr,
        nextArr,
        currentWidth = 0,
        h2 = document.querySelector('#services .wrapper h2'),
        html = `
                <div class="slider-arrow next"><span><i class="fa fa-angle-right"></i></span></div>
                <div class="slider-arrow prev"><span><i class="fa fa-angle-left"></i></span></div>
            `;
    slide.forEach((elem,index) => {
        if(index === 0){
            elem.style.cssText = `
                -webkit-transition: .2s linear;
                -moz-transition: .2s linear;
                -o-transition: .2s linear;
                transition: .2s linear;
                min-width: 210px;
            `;
        } else {
            elem.style.cssText = `min-width: 210px;`;
        }
  
    });
  
    sliderWrapper.style.cssText = `max-width: 1150px`;
  
    document.getElementById('services').insertAdjacentHTML('afterbegin', h2.outerHTML);
    h2.remove();
  
    slider.style.cssText = `
        position: relative;
        overflow-x: hidden;
    `;
    slider.insertAdjacentHTML('beforeEnd', html);
  
    const moveSlide = (changeSlide) => {
        currentWidth += +changeSlide;
  
  
        if(currentWidth <= 6){
            currentWidth = 4;
            slide[0].style.marginLeft = `-${currentWidth}px`;
            currentWidth = 0;
        } else if(currentWidth >= maxWidth){
            currentWidth = maxWidth;
            slide[0].style.marginLeft = `-${currentWidth}px`;
        }
        slide[0].style.marginLeft = `-${currentWidth}px`;
  
    };
  
    slider.addEventListener('click', (event) => {
        let target = event.target;
        event.preventDefault();
        if(target.closest('.next')){
            moveSlide(minWidth);
        }
        if(target.closest('.prev')){
            moveSlide(-minWidth);
        }
    });
  };
  
  export default servicesSlider;