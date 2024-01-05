$(document).ready(function () {
    $("#admissionForm").validate({
        rules: {
            fname: {
                required: true,
                maxlength: 10,
                minlength: 3,
            },
            fathername: {
                required: true,
                maxlength: 20,
                minlength: 3,
            },
            lastname: {
                required: true,
                maxlength: 13,
                minlength: 3,
            },
            mothername: {
                required: true,
                maxlength: 19,
                minlength: 3,
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 11,
            },
            email: {
                required: true,
                email: true
            },


            District: {
                required: true,
            },
            addmissiondate: {
                required: true,
                date: true,
            },
            addherno: {
                required: true,
                minlength: 12,
                maxlength: 13,
            },
            address: {
                required: true,
            },
            pincode: {
                required: true,
                minlength: 6,
                maxlength: 7,
            },
            password: {
                required: true,

            },
            conpass: {
                required: true,
                equalTo: "#password"

            }






        },
        messages: {
            fname: {
                required: "Please enter your name",
                maxlength: "Maximum length is 10 characters",
                minlength: "Minimum length is 3 characters",
            },

            fathername: {
                required: "Please enter your father name",

            },
            phone: {
                required: "plz enter your phone number",
                minlength: "10 digit allow in this box",
                maxlength: "10 digit allow in this box",
            },
            addherno: {
                required: "plz enter your addhar no",
                minlength: "plz enter valid addhar no",
                maxlength: "plz enter valid your addhar no",
            },

            pincode: {
                required: "plz enter pincode",
                minlength: "plz enter valid pincode",
                maxlength: "this is pincod not a valid",
            },






        },
        submitHandler: function (form) {
            alert("Form submitted successfully!");
            // You can use AJAX to send the form data to the server
            return false; // Prevent the form from submitting normally
        },
    });
});
