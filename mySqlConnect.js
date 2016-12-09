 var express = require('express');
 var mysql = require('mysql');
 var connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     password: '',
     database: 'angularcode_grid'
 });

 var app = express();

 connection.connect(function(err) {
     if (!err) {
         console.log("Databse is connected .... \n\n");
     } else {
         console.log("Error connecting database .... \n\n");
     }
 });

 app.get("/", function(req, res) {
     connection.query('select * from customers LIMIT 2', function(err, rows, fields) {
         connection.end();
         if (!err) {
             console.log("The solution is : ", rows);
         } else {
             console.log("Error while performing Query.");
         }
     });
 });

 app.listen(3000);

 // connection.query('SELECT * from customers', function(err, rows, fields) {
 //     if (!err)
 //         console.log('The solution is: ', rows);
 //     else
 //         console.log('Error while performing Query.');
 // });

 // connection.end();