const sendForm = () => {
    const  loadMessage = 'Идет отправка...';
    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
      
        statusMessage.style.cssText = 'font-size: 1rem; color: #ffd11a; display: block; margin:auto';
        const thxPopUp = document.getElementById('thanks');
         

forms.forEach(elem => {

            // скрываем попап после отправки
            const hidePopup = () => {   
                if (elem.closest('.popup')) {
                    elem.closest('.popup').style = 'display: none';
                };
            };
                
            let checkbox = elem.querySelector('input[type="checkbox"]');

            elem.addEventListener('submit', (event) => {
                event.preventDefault();

                // console.log(checkbox);
                // console.log(elem);
                
                if (elem.id !== 'footer_form' && !checkbox.checked) {
                    // alert('Cогласитесь на обработку данных')
                    elem.after(statusMessage);
                    statusMessage.textContent = 'Дайте согласие на обработку данных';       
    
                }

                if (elem.id === 'footer_form' || checkbox.checked) {
   
                    elem.after(statusMessage);
                    statusMessage.textContent = loadMessage;

                // создаем спец объект, к-ый считывает данные с нашей формы
                const formData = new FormData(elem); 
                      
                let body = {};

                // получаем все данные из объекта formData, записываем в body
                formData.forEach((value, key) => {    
                    body[key] = value;
                });
                // console.log(body);
            
                // очищаем инпуты после отправки
                //  [...event.target.elements].forEach((item) => {
                //      if (item.tagName.toLowerCase() === 'input') {
                //     item.value = '';                
                //     }
                // });
                
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error ('Status network is not 200')
                        }
                    
                        thxPopUp.style = 'display: block';
                        statusMessage.textContent = '';
                        hidePopup();
                    })
                    .catch((error) => {
                        thxPopUp.querySelector('p').innerHTML = `Извините. 
                        <br> Что-то пошло не так.`;
                        thxPopUp.style = 'display: block'
                        statusMessage.textContent = '';
                        hidePopup();

                        console.error(error); 
                    })
                    .finally(() => {
                        setTimeout(() => {
                            
                            thxPopUp.style = 'display: none';
                            hidePopup();
                            statusMessage.textContent = '';

                        }, 3000)
                    }); 
                }
            
            });
            
});    

const postData = (body) => {
    // создаем Fetch
    return fetch('./server.php', { // url, второй аргумент - объект настроек
         // проиписываем метод, по дефолту - GET
            method: 'POST',
             headers: {
                'Content-Type': 'application/json'
            },
                body: JSON.stringify(body)
            }) 
    };

};

export default sendForm;