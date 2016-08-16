const express = require('express');
const path = require('path');
let app = express(),
  port = 4343;

app.use('/', express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
    res.json({
        'route': 'This page does not exist'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
