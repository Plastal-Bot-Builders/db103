const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

// Initialize Express
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize Sequelize for MySQL
const sequelize = new Sequelize('church_db', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test Sequelize connection
sequelize.authenticate()
    .then(() => console.log('Connection established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

// Define Models

// Congregants Table
const Congregant = sequelize.define('Congregant', {
    CongregantID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    DateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    Phone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
    Email: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
});

// Attendance Table
const Attendance = sequelize.define('Attendance', {
    AttendanceID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CongregantID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Congregant,
            key: 'CongregantID'
        }
    },
    AttendanceDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

// Events Table
const Event = sequelize.define('Event', {
    EventID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    EventName: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    EventDate: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

// EventAttendance Table (Many-to-Many relationship)
const EventAttendance = sequelize.define('EventAttendance', {
    EventID: {
        type: DataTypes.INTEGER,
        references: {
            model: Event,
            key: 'EventID'
        }
    },
    CongregantID: {
        type: DataTypes.INTEGER,
        references: {
            model: Congregant,
            key: 'CongregantID'
        }
    }
});

// Sync models with the database
sequelize.sync({ force: false })
    .then(() => console.log('Database synced with changes!'))
    .catch(err => console.error('Error syncing database:', err));


// Routes for handling data

// Add Congregant
app.post('/congregants', async (req, res) => {
    try {
        const { Name, DateOfBirth, Address, Phone, Email } = req.body;
        const newCongregant = await Congregant.create({ Name, DateOfBirth, Address, Phone, Email });
        res.status(201).json(newCongregant);
    } catch (err) {
        res.status(500).send('Error adding congregant: ' + err);
    }
});

// Add Attendance
app.post('/attendance', async (req, res) => {
    try {
        const { CongregantID, AttendanceDate } = req.body;
        const newAttendance = await Attendance.create({ CongregantID, AttendanceDate });
        res.status(201).json(newAttendance);
    } catch (err) {
        res.status(500).send('Error recording attendance: ' + err);
    }
});

// Add Event
app.post('/events', async (req, res) => {
    try {
        const { EventName, EventDate } = req.body;
        const newEvent = await Event.create({ EventName, EventDate });
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(500).send('Error adding event: ' + err);
    }
});

// Record Event Attendance
app.post('/event-attendance', async (req, res) => {
    try {
        const { EventID, CongregantID } = req.body;
        const eventAttendance = await EventAttendance.create({ EventID, CongregantID });
        res.status(201).json(eventAttendance);
    } catch (err) {
        res.status(500).send('Error recording event attendance: ' + err);
    }
});


// Server setup
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.use(express.static('public'));

