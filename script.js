document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const whatsappNumber = document.getElementById('whatsappNumber').value;

    const message = `Hello, I would like to send you an email: ${email}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${"+91"+whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
});
