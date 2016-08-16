const express = require('express');
const path = require('path');
let app = express(),
  port = 4444;

require('node-jsx').install();

app.use(express.static(path.join(__dirname, 'build')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up Routes for the application
require('./app/routes/core-routes.js')(app);

//Route not found -- Set 404
app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
