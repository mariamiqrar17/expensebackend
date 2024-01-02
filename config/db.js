const mongoose = require('mongoose');

// const conn = mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
exports. Mongoose = () => {mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err));
}
// conn.connection.on('error', (err) => {
//   console.error(`MongoDB connection error: ${err}`);
// });

// conn.connection.on('disconnected', () => {
//   console.log('MongoDB disconnected');
// });

// console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);


// module.exports = connectDB;