// Connect to Database and require dependices.
var mysql =require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    port:3306,
    user:"root",
    password:"root",
    database:"burgers_db"
});

// create connection and console log to see if connected/ export module

connection.connect(function(err){
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId) 
});
module.exports = connection;
