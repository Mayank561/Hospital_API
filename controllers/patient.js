const Report = require('../models/report');
const User = require('../models/user');

// Register a new patient
module.exports.register = async function(req, res) {
    try {
        // Check if a user with the provided username (number) already exists
        let user = await User.findOne({ username: req.body.number });

        if (user) {
            // If user already exists, return a success status with user information
            return res.status(200).json({
                message: 'User Already Registered',
                data: {
                    user: user
                }
            });
        }

        // Create a new patient user
        user = await User.create({
            username: req.body.number,
            name: req.body.name,
            password: '12345', // You may want to improve this part for security
            type: 'Patient'
        });

        // Return a success status with the newly created patient user
        return res.status(201).json({
            message: 'Patient registered successfully',
            data: user
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// Create a medical report for a patient
module.exports.createReport = async function(req, res) {
    try {
        // Find the patient user by ID
        const user = await User.findById(req.params.id);

        if (!user) {
            // If patient doesn't exist, return an unprocessable entity status
            return res.status(422).json({
                message: "Patient Does not exist"
            });
        }

        // Create a new medical report
        const report = await Report.create({
            createdByDoctor: req.user.id,
            patient: req.params.id,
            status: req.body.status,
            date: new Date()
        });

        // Add the report to the patient's reports array
        user.reports.push(report);

        // Return a success status with the newly created report
        return res.status(201).json({
            message: 'Report created successfully',
            data: report
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// Get all reports of a patient
module.exports.patientReports = async function(req, res) {
    try {
        // Find all reports for the specified patient ID, populate the createdByDoctor field, and sort by date
        const reports = await Report.find({ patient: req.params.id }).populate('createdByDoctor').sort('date');

        // Format the report data for response
        const reportData = reports.map(report => {
            const originalDate = report.date;
            const dateObj = new Date(originalDate);

            const formattedDate = dateObj.toLocaleString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                hour12: false
            });

            return {
                createdByDoctor: report.createdByDoctor.name,
                status: report.status,
                date: formattedDate
            };
        });

        // Return a success status with the formatted report data
        return res.status(200).json({
            message: `List of Reports of User with id -  ${req.params.id}`,
            reports: reportData
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
