const Report = require('../models/report');

module.exports.filteredReports = async function (req, res) {
    try {
        const { status } = req.params; // Destructure status from req.params
        const reports = await Report.find({ status });

        return res.status(200).json({
            message: `List of Reports with status ${status}`,
            reports: reports, // Use the variable name 'reports' instead of 'report'
        });
    } catch (err) {
        console.error(err); // Use console.error for errors
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
};
