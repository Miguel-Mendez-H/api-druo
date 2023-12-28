const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models/index');
const routes = require('./routes/index');
const app = express();
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({origin: "*"}));

app.use('/api', routes);

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