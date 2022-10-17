var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database:"MYsql_database"
});

con.connect(function (err) {
    if (err) {
        console.log("Error Message:", err);
    }
    else {
        console.log("Connected!");
    }
    const sql = "INSERT INTO EMP VALUES(NULL,'TEJASHRI',24)";
    con.query(sql,(err,result)=>{
        if(err){
            console.log("Error Message:",err)
        }
        else{
            console.log("Values Inserted Sucessfully.")
        }
    })
});

