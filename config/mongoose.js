const mongoose = require('mongoose');

async function connectToDatabase() {
  try {
<<<<<<< HEAD
    await mongoose.connect('mongodb+srv://mayankguptaedu:mayank@cluster0.rs35ezb.mongodb.net/Hospital_Api', {
=======
    await mongoose.connect('mongodb://localhost:27017/Hospital_Api', {
>>>>>>> d7afea64cec0ef17dbf8c16338c066875a9f16f5
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
