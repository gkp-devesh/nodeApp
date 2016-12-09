var express = require("express");
var mysql = require("mysql");
var app = express();

var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'angularcode_grid',
    debug: false
});

function handle_database(req, res) {
    pool.getConnection(function(err, connnection) {
        if (err) {
            connnection.release();
            res.json({ "code": 100, "status": "Error in Connection database" });
            return;
        }

        console.log("connected as id " + connnection.threadId);

        connection.query("Select * from customers", function(err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            }
        });

        connnection.on('error', function(err) {
            res.json({ "code": 100, "status": "Error in Connection database" });
            return;
        });

    });
}