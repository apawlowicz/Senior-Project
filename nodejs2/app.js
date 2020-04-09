const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
 
// parse application/json
app.use(bodyParser.json());
 
app.use(cors())

//create database connection
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'StanTheMan54', 
    database: 'seniorproject'
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
//show all products
app.get('/',(req, res) => {
  let sql = "SELECT * FROM teams";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});
 
//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});

