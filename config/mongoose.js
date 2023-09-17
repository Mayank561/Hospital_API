const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/Hospital_Api');
const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error connecting to the db'));
db.once('open',function(){
    console.log("SUCCESSFULLY CONNECTED TO THE DATABASE");

});
module.exports = db;