const express = require('express');
const mysql2 = require('mysql2/promise');
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('node:path')
const conn = mysql2.createPool ({
    host: 'ls-ee35ee1457cc9195ef0d407786196bc547147dcf.cgv58gcmrdac.eu-west-3.rds.amazonaws.com',
    user: 'dbmasteruser',
    database: 'reach_aut_to_us',
    password: 'dg+C9=LNt[|o*waqr7i^1&IkLc]pNMH#',
    port:3306,
});

const app = express();

app.use(express.static(path.join(__dirname + '/../client/build')))
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/message/', (req, res) => {
    // res.send('success!');
    conn.query('SELECT * FROM message')
    .then((data) => {
        res.json(data[0]);
    });
    console.log('succes!');
});

app.post('/message/', async function(req, res) {
    const { name, email, message} = req.body;
    console.log(req.body)

    await conn.query(`INSERT INTO message (username, email, usermessage) VALUES ('${name}', '${email}', '${message}')`);
    res.json({success:true});
});

app.listen(5001, function() {
    console.log('server started!');
});