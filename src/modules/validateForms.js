const validateForms = () => {
    const phones = document.querySelectorAll('input[name = "phone"]'),
    names = document.querySelectorAll('input[name = "name"]');

    phones.forEach((elem) => {
        maskPhone(`#${elem.id}`);
    });

    names.forEach((item) => {
        item.addEventListener('input', () => {
            item.value = item.value.match(/[А-Яа-я\s]*$/)
        });    
    });  
    
    const personalDataCheckbox = document.querySelectorAll('.personal-data'),
    buttonSend = document.querySelectorAll('button[name = "send1"')


    // блокируем все кнопки в попапах по умолчанию
    const block = () => {
        buttonSend.forEach((item) => {
            item.toggleAttribute('disabled');
        });
    }
    block();

    personalDataCheckbox.forEach((elem) => {
        elem.addEventListener('change', (event) => {
            if (event.target.checked) {
                !block();
            };
        });
        
    })
    



};

export default validateForms;
