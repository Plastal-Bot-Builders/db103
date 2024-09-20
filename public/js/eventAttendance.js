document.getElementById('event-attendance-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const eventId = document.getElementById('eventId').value;
    const congregantId = document.getElementById('congregantId').value;

    fetch('/event-attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ EventID: eventId, CongregantID: congregantId })
    })
    .then(res => res.json())
    .then(data => {
        alert('Event attendance recorded successfully!');
        document.getElementById('event-attendance-form').reset();
    })
    .catch(err => console.log(err));
});
