const sendForm = () => {
    const erorMessage = 'Что-то пошло не так...',
        loadMessage = 'Идет отправка...',
        successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';
    const forms = document.querySelectorAll('form');
    const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: white; display: flex; margin:auto';

        forms.forEach(elem => {
            elem.addEventListener('submit', (event) => {
                event.preventDefault();
                elem.after(statusMessage);
                statusMessage.textContent = loadMessage;
                // создаем спец объект, к-ый считывает данные с нашей формы
                const formData = new FormData(elem); 
                      
                let body = {};

                // получаем все данные из объекта formData, записываем в body
                formData.forEach((value, key) => {    
                    body[key] = value;
                });
                console.log(body);
                console.log(elem.closest('.popup'));
                
                // очищаем инпуты после отправки
                 [...event.target.elements].forEach((item) => {
                     if (item.tagName.toLowerCase() === 'input') {
                    item.value = '';                
                    }
                });
                
                postData(body)
                    .then((response) => {
                        if (response.status !== 200) {
                            throw new Error ('Status network is not 200')
                        }
                        elem.style = 'display: none';
                        statusMessage.textContent = successMessage;
                    })
                    .catch((error) => {
                        elem.style = 'display: none';
                        statusMessage.textContent = erorMessage;
                        console.error(error); 
                    })
                    .finally(() => {
                        setTimeout(() => {
                            elem.style = 'display: block';
                            elem.closest('.popup').style = 'display: none';
                            statusMessage.textContent = '';
                        }, 5000)
                    }); 
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