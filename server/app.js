const express = require('express');
const path = require('path');
var favicon = require('serve-favicon')

const app = express();
app.set('PORT', process.env.PORT || 5000);

app.use(express.static(path.join(__dirname, '..', 'static')));
app.use(favicon(path.join(__dirname,'..', 'static','images', 'favicon.ico')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'static', 'index.html'));
});

module.exports = app;
