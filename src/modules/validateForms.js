const validateForms = () => {
    const phones = document.querySelectorAll('input[name = "phone"]'),
    names = document.querySelectorAll('input[name = "name"]');

    phones.forEach((elem) => {
        maskPhone(`#${elem.id}`);
    });

    names.forEach((item) => {
        
        item.addEventListener('input', () => {
            if (item.placeholder === 'Промокод') {
                item.value = item.value.match(/[А-Яа-я\s\d]*$/)
            } else 
                item.value = item.value.match(/[А-Яа-я\s]*$/)
            
        });   
    });  
    
    
};

export default validateForms;
