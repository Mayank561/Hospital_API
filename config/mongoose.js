const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Hospital_Api');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the db'));
db.once('open',function(){
    console.log("SUCCESSFULLY CONNECTED TO THE DATABASE");

});
module.exports = db;
