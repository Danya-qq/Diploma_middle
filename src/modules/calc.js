const calc = () => {

    const calcOrder = document.getElementById('card_order'),
        cardType = calcOrder.querySelectorAll('input[type="radio"]'),
        priceAction = calcOrder.querySelector('.price-message input'),
        price = document.getElementById('price-total');

        const cost = [0, 3000, 6000, 9000, 12000];
        let value = price.textContent;

        priceAction.addEventListener('input', (e) => {
            let target = e.target;
            
            if (target.value === 'тело') {
                console.log(target.value);
                
                value = price.textContent * 0.7
                price.textContent = value;

                
                
                cardType.forEach((elem, index, arr) => {
                    
                    
                    elem.addEventListener('change', (event) => {
                        console.log(value);
                        
                        // value = price.textContent
                        
                            if (arr[4].checked) {
                                let value1 = price.textContent;
                                console.log(value1);
                                
                             
                                if  (event.target.id === 'card_leto_mozaika') {
                                    return price.textContent = (value - 2000) * 0.7;
                                };
                                
                                price.textContent = +cost[elem.id.slice(1)] * 0.7
                            
                            };
        
                            if (arr[5].checked) {

                                let value = price.textContent;
                
                            if  (event.target.id === 'card_leto_schelkovo') {
                                return price.textContent = (+value + 2000) * 0.7
                            };
                            
                                price.textContent = Math.floor((2000 + +cost[elem.id.slice(1)]) * 0.7);
                                
                            };
                    
                });
        
            }); 
                
            } else {
                // saleCheck()
            }

            

           
            

        });

function saleCheck() {

        
    cardType.forEach((elem, index, arr) => {
        
        

            elem.addEventListener('change', (event) => {
                console.log(1);

                    if (arr[4].checked) {
                        let value = price.textContent;

                        if  (event.target.id === 'card_leto_mozaika') {
                            return price.textContent = value - 2000;
                        };
                        
                        price.textContent = +cost[elem.id.slice(1)]
                    
                    };

                    if (arr[5].checked) {
                        let value = price.textContent

                        if  (event.target.id === 'card_leto_schelkovo') {
                            return price.textContent = +value + 2000
                        };
                        
                            price.textContent = 2000 + +cost[elem.id.slice(1)]
                        
                    };
            
        });

    }); 
};

saleCheck()




};


export default calc;