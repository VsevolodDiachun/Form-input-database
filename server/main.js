const express = require('express');
const mysql2 = require('mysql2/promise');
const bodyParser = require('body-parser');

const conn = mysql2.createPool ({
    host: 'localhost',
    user: 'root',
    database: 'reach_aut_to_us',
    password: 'root',
    port:8889,
});

const app = express();

app.use(bodyParser.urllencoded());

app.get('/reach', (req, res) => {
    // res.send('success!');
    conn.query('SELECT * FROM reach')
    .then((data) => {
        res.json(data[0]);
    });
    console.log('succes!');
});

app.post('/reach/:id', async function(req, res) {
    const { id } = req.params;
    const { name, type } = req.body;
    await conn.query('INSERT INTO name SET ?', {
        id,
        name,
        email,
        message,
    });
    res.send(true);
});

app.listen(3000, function() {
    console.log('server started!');
});