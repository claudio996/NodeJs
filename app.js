const express = require('express');
const  app = express();
const path = require('path');

app.use('/', require('./router/router') );
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));

app.listen('5000', () => {
    console.log('server run in http://localhost:5000');
})


