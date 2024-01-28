    // db.js
const mongoose = require('mongoose');

// Connect to MongoDB with the desired database name
mongoose.connect('mongodb+srv://yashsuryawanshi1722:yash1722@cluster0.e3gefut.mongodb.net/', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // 30 seconds timeout
      });
      
// Export the mongoose connection instance
module.exports = mongoose.connection;
