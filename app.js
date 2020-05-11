const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Appsody 666!");
});
 
module.exports.app = app;
