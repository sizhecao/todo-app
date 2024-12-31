const app = require('./app.js');
const db = require('./config/db.js');
const PORT = process.env.PORT || 5001;

db.once('open', () => {
  const server = app.listen(PORT, () => {
    console.log(`API server running on http://localhost:${PORT}`);
  });

  process.on('unhandledRejection', (err) => {
    console.error(err);

    server.close(() => {
      process.exit(1);
    });
  });
});
