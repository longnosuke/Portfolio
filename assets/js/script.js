$(document).ready(function () {
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
});

var typed = new Typed(".typing-text", {
    strings: ["frontend development", "backend development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});