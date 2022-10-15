const mysql = require('mysql');

const conn = mysql.createPool ({
    host: 'localhost',
    user: 'root',
    database: 'reach_aut_to_us',
    password: 'root',
    port:8889,
});

conn.getConnection(err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log('Database - - - - - OK');
    }
});

let query = "SELECT * FROM reach";

conn.query(query, (err, result) => {
    console.log(err);
    console.log(result);
    console.log(result[1]['name']);
});

setTimeout(() => {
    conn.end(err => {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log('Database - - - - - Close');
    }
});
}, 1000)

// conn.end(err => {
//     if (err) {
//         console.log(err);
//         return err;
//     } else {
//         console.log('Database - - - - - Close');
//     }
// });