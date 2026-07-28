/* ==========================================
   Twinks n Lors DigitalFix Solutions
   contact.js
========================================== */
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");
    if (!contactForm)
        return;
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // Get form values
        const name =
            contactForm.querySelector(
                'input[placeholder="Full Name"]'
            ).value.trim();
        const email =
            contactForm.querySelector(
                'input[placeholder="Email Address"]'
            ).value.trim();
        const subject =
            contactForm.querySelector(
                'input[placeholder="Subject"]'
            ).value.trim();
        const message =
            contactForm.querySelector(
                "textarea"
            ).value.trim();
        // Validation
        if(name === "" ||
           email === "" ||
           subject === "" ||
           message === ""){
            showMessage(
                "Please complete all required fields.",
                "danger"
            );
            return;
        }
        // Email validation
        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailPattern.test(email)){
            showMessage(
                "Please enter a valid email address.",
                "danger"
            );
            return;
        }
        /*
            Future integration:
            Here we can connect to:
            - ASP.NET Core API
            - PHP Mailer
            - Node.js backend
            - Database inquiry table
        */
        showMessage(
            "Thank you! Your message has been received. We will contact you soon.",
            "success"
        );
        contactForm.reset();
    });
    function showMessage(text, type){
        // Remove existing alert
        const oldAlert =
        document.querySelector(".contact-alert");
        if(oldAlert)
            oldAlert.remove();
        const alertBox =
        document.createElement("div");
        alertBox.className =
        `alert alert-${type} contact-alert mt-3`;
        alertBox.innerHTML = text;
        contactForm.appendChild(alertBox);
        // Auto hide
        setTimeout(()=>{
            alertBox.remove();
        },5000);
    }
});