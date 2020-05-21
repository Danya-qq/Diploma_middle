const togglePopUp = () => {
    const popUps = document.querySelectorAll('.popup');
    

    popUps.forEach((item) => {
        
        item.addEventListener('click', (e) => {
            let target = e.target;

            if (item.id === 'gift') {

                if (target.matches('.overlay, .close-btn, img')) {
                  
                    item.style = 'display: none'
                };  
            };
            
            if (target.matches('img, .overlay')) {
                item.style = 'display: none'
            }; 

            if (item.id === 'thanks') {
                if (target.matches('img, .overlay, .close-btn')) {
                    item.style = 'display: none'
                }; 
            }

        

        })
    });

};


export default togglePopUp;