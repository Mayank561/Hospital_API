# Hospital Management API

Welcome to the Hospital Management API project. This API is designed to facilitate the management of doctors and patients in a hospital setting, with a specific focus on COVID-19 testing, quarantine, and patient well-being.

## Tech Stack

- **Node.js**: JavaScript runtime for building the server-side application.
- **MongoDB**: A NoSQL database for storing and managing data.

## Installation

Follow these steps to set up the project on your local system:

1. **Clone the Repository**: Start by cloning this repository to your local machine.

   ```bash
   git clone https://github.com/your-username/hospital-management-api.git
Navigate to the Project Directory: Change your current directory to the project folder.

bash
Copy code
cd hospital-management-api
Install Dependencies: Install the required Node.js dependencies by running:

bash
Copy code
npm install
Start the Server: Launch the server with the following command:

bash
Copy code
npm start
The API will be accessible at http://localhost:3000.

Usage
Doctors
Register a Doctor:

Endpoint: POST /doctors/register
Body: JSON with username and password
Description: Allows doctors to register with a username and password.
Doctor Login:

Endpoint: POST /doctors/login
Body: JSON with username and password
Description: Authenticates doctors and returns a JWT (JSON Web Token) for subsequent requests.
Patients
Register a Patient:

Endpoint: POST /patients/register
Body: JSON with patient details (e.g., name, phone number)
Description: Registers a new patient in the system.
Create a Patient Report:

Endpoint: POST /patients/:id/create_report
Params: id - Patient ID
Body: JSON with report details (e.g., status)
Description: Records a patient's health report, including status and date.
List All Reports of a Patient:

Endpoint: GET /patients/:id/all_reports
Params: id - Patient ID
Description: Retrieves all reports for a specific patient, sorted from oldest to latest.
Reports
List All Reports by Status:
Endpoint: GET /reports/:status
Params: status - Report status (e.g., Negative, Travelled-Quarantine)
Description: Fetches all reports filtered by a specific status.
Data Models
Doctor Model

username (String)
password (String, hashed)
Patient Model

Fields for patient details (e.g., name, phone_number)
Patient Report Model

createdBy (Doctor ID)
status (Enum: Negative, Travelled-Quarantine, Symptoms-Quarantine, Positive-Admit)
date (Date)
Authentication
Authentication is required for routes related to doctors and patients.
Use the JWT obtained after doctor login to access protected routes.
Folder Structure
The project adheres to a scalable folder structure with clear separation of concerns:

bash
Copy code
hospital-management-api/
  ├── controllers/       # Controllers for route handling
  ├── models/            # Data models (Doctor, Patient, PatientReport)
  ├── routes/            # Route definitions
  ├── utils/             # Utility functions
  ├── app.js             # Express application setup
  └── ...
