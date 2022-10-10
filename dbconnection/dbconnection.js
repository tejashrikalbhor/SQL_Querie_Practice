var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123"
});

con.connect(function (err) {
    if (err) {
        console.log("Error Message:", err);
    }
    else {
        console.log("Connected!");
    }
    con.query("CREATE DATABASE MY_SQL_QUERRY",(err,result)=>{
        if(err){
            console.log("Error Message:",err)
        }
        else{
            console.log("DataBase Created sucessfully.")
        }
    })
});

