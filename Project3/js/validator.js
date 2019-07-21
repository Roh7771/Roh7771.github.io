$(document).ready(function(){
    function validateForm(form) {
        $(form).validate({
            rules: {
                name: "required",
                tel: {
                    required: true,
                    number: true,
                },
                email: {
                    required: true,
                    email: true
                },
            },
            messages: {
                name: "Введите свое имя!",
                email: {
                    required: "Введите свою почту.",
                    email: "Формат адреса почты должен быть таким: name@domain.com."
                },
                tel: {
                    required: "Введите номер телефона.",
                    number: "Пожалуйста, введите только цифры!"
                }
            }
        });
    }
    validateForm(".modal__form_order");
    validateForm(".modal__form_consultation"); 
    validateForm(".consultation__form");  
});