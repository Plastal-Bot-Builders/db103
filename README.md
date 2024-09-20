# Church Database Management System (DBMS)

This project is a Church DBMS built with:
* **Backend:** Node.js, Express, Sequelize, MySQL
* **Frontend:** HTML, CSS, JavaScript

## Features:
* **Congregants:** Add, update, and manage details.
* **Attendance:** Record attendance by date.
* **Events:** Create and manage church events.
* **Event Attendance:** Track attendees for specific events.

## Prerequisites:
* Node.js (v12 or higher)
* MySQL (or compatible database)

## Setup:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/church-dbms.git
   cd church-dbms
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database:
   * Create a database named `church_db` (or your choice).
   * Update `config/config.json` with your MySQL credentials.

4. Run migrations:
   ```bash
   npx sequelize db:migrate
   ```

5. Start the server:
   ```bash
   npm start
   ```

**Access http://localhost:3000**

## Project Structure:
```
church-dbms/
├── config/        (Database config)
├── migrations/    (Sequelize migrations)
├── models/        (Sequelize database models)
├── public/        (Public assets)
│   ├── css/
│   ├── js/
│   └── index.html
├── routes/        (Express route handlers)
└── server.js      (Main server file)
└── package.json   (Dependencies and scripts)
```

## API Endpoints:
* **Congregants:**
   * GET /congregants: Get all congregants
   * POST /congregants: Add a new congregant
* **Attendance:** POST /attendance: Record attendance
* **Events:** POST /events: Add a new event
* **Event Attendance:** POST /event-attendance: Record attendance

## License:
MIT (See LICENSE file)

## Contact:
* Email: plastalbotbuilders@gmail.com
* GitHub: https://github.com/Plastal-Bot-Builders
