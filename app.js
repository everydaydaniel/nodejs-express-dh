const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from garage");
});

module.exports.app = app;
