
# Hospital Management API

This API manages doctors and patients in a hospital, focusing on COVID-19 testing, quarantine, and patient well-being.

## Tech Stack

- **Node.js**: JavaScript runtime for the server.
- **MongoDB**: Database for data storage.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/hospital-management-api.git

2. Navigate to the Project Directory:

- cd hospital-management-api

3 . Install Dependencies:
- npm install

4. Start the Server:
   - npm start
Access the API at http://localhost:3000.

Usage
**Doctors**
- Register a Doctor (POST /doctors/register): Allows doctors to register with a username and password.
- Doctor Login (POST /doctors/login): Authenticates doctors and returns a JWT.

**Patients**
- Register a Patient (POST /patients/register): Registers a new patient with details.
- Create a Patient Report (POST /patients/:id/create_report): Records a patient's health report, including status and date.
- List All Reports of a Patient (GET /patients/:id/all_reports): Retrieves all patient reports, sorted by date.

**Reports**
- List Reports by Status (GET /reports/:status): Fetches reports filtered by status.

  **Data Models**
  - Doctor Model: username (String), password (String, hashed).
  - Patient Model: Fields for patient details (e.g., name, phone_number).
  - Patient Report Model: createdBy (Doctor ID), status (Enum), date (Date).

  **Authentication**
  - Authentication is required for doctor and patient routes.
  - Use the JWT obtained after doctor login for access.
 
    **Folder Structure**
    -Scalable folder structure with clear separation of concerns.

