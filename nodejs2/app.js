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
app.get('/tm',(req, res) => {
  let sql = "SELECT A.PI, A.value, A.Subcategory FROM teammaturity AS A WHERE A.Subcategory LIKE 'Definition of Ready' OR A.Subcategory LIKE 'Backlog Health'";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});
 
app.route('/user/:teamId/:artId').get((req, res) => {
  console.log(req.params.teamId);
  let sql = `SELECT * FROM user WHERE teamId = ${req.params.teamId||0} AND artId = ${req.params.artId||0};`;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results));
  });
});

//Server listening
app.listen(3000,() =>{
  console.log('Server started on port 3000...');
});

