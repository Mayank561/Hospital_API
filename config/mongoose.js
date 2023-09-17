const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://mayankguptaedu:mayank@cluster0.rs35ezb.mongodb.net/Hospital_Api', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Terminate the application on database connection error
  }
}

connectToDatabase();

module.exports = mongoose.connection;
