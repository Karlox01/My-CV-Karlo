function sendMail(contactForm) {
    emailjs.send("service_dth2s0f", "template_mrextxh", {
        from_name: contactForm.name.value,
        message: contactForm.projectsummary.value,
        from_email: contactForm.emailaddress.value
    })
    .then(
        function (response) {
            console.log('Success', response);
        },
        function (error) {
            console.log('failed', error);
        }
    );
    return false;
};