const express = require('express')
const app = express();
const port = 3000;

const test = require('./routes/test');
const index = require('./routes/index');

app.use('/', index);
app.use('/test', test);


app.listen(port, ()=> {
    console.log(`Mise sur ecoute de server sur le port ${port}`);
})


