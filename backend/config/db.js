const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
  process.exit(1);
});

db.on('connected', () => {
  console.log('Connected to MongoDB Atlas');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB Atlas');
});

// Handle process termination
process.on('SIGINT', async () => {
  await db.close();
  process.exit(0);
});

module.exports = db;
