const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from garagE");
});

module.exports.app = app;
