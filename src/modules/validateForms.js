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

};

export default validateForms;
