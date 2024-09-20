document.getElementById('congregant-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    fetch('/congregants', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name: name, DateOfBirth: dob, Address: address, Phone: phone, Email: email })
    })
    .then(res => res.json())
    .then(data => {
        alert('Congregant added successfully!');
        document.getElementById('congregant-form').reset();
    })
    .catch(err => console.log(err));
});
