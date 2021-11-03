$(function () {

    $('form').validate({
        rules: {
            fullname: {
                required: true
            },
            password: {
                required: true
            },
            pet: {
                required: true,
                maxlength: 2
            }
        },
        messages: {
            pet: {
                required: "You must select at least 1 box",
                maxlength: "Select no more than {0} boxes"
            }
        },
        submitHandler: function(form) {
            //alert('ajax being called...');
        },
        invalidHandler: function (event, validator) {
            //alert('number of invalid fields: ' + validator.numberOfInvalids());
        },
        highlight: function (element, errorClass) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element, errorClass) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            if (element.attr('type') == 'checkbox') {
                element.closest('.form-group').children(0).prepend(error);
            }
            else
                error.insertAfter(element);
        }
    });

});
