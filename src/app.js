const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/index');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('App is listening on port 3000');
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });


module.exports = app;