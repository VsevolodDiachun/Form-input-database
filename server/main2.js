const express = require('express');
const mysql2 = require('mysql2/promise');

const pool= mysql2.createPool ({
    host: 'localhost',
    user: 'root',
    database: 'reach_aut_to_us',
    password: 'root',
    port:8889,
});

const app = express();

app.get('/reach', function(req, res){
    // res.send('success!');
    pool.query('SELECT * FROM reach')
    .then((data) => {
        res.json(data[0]);
    });
    console.log('succes!');
});

app.listen(3000, function() {
    console.log('server started!');
});