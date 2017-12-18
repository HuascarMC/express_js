const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./controllers/index.js');
app.use(router);

app.listen(3000, function () {
  console.log(`Films app listening on port ${ this.address().port }`);
});
