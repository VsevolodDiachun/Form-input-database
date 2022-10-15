const mysql = require('mysql');

// konfiguration

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "node_test",
    password: ""
});

conn.connect(err => {
    if (err) {
        console.log(err);
        return err:
    }
    else {
        console.log('Darabase - - - - - OK');
    }
});

let query = "SELECT * FROM user";

conn.query(query, (err, result, field) =>{
    console.log(err);
    console.log(result);
    console.log(result[1]['username']);
});

conn.end(err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log('Darabase - - - - - Close');
    }
});