document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const eventName = document.getElementById('eventName').value;
    const eventDate = document.getElementById('eventDate').value;

    fetch('/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ EventName: eventName, EventDate: eventDate })
    })
    .then(res => res.json())
    .then(data => {
        alert('Event added successfully!');
        document.getElementById('event-form').reset();
    })
    .catch(err => console.log(err));
});
