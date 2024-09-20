document.getElementById('attendance-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const congregantId = document.getElementById('congregantId').value;
    const attendanceDate = document.getElementById('attendanceDate').value;

    fetch('/attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ CongregantID: congregantId, AttendanceDate: attendanceDate })
    })
    .then(res => res.json())
    .then(data => {
        alert('Attendance recorded successfully!');
        document.getElementById('attendance-form').reset();
    })
    .catch(err => console.log(err));
});
