document.getElementById('alertForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    fetch('/.netlify/functions/set-alert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, phoneNumber })
    })
    .then(response => response.json())
    .then(data => {
        alert('Alert set successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
