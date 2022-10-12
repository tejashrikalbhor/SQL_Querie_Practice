var mysql = require('mysql2');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Admin@123",
    database:"MY_SQL_QUERRY"
});

con.connect(function (err) {
    if (err) {
        console.log("Error Message:", err);
    }
    else {
        console.log("Connected!");
    }
    con.query( 'SELECT * FROM STUDENT WHERE NAME LIKE "%I"',(err,result)=>{
        if(err){
            console.log("Error Message:",err)
        }
        else{
            console.log("Student Data.",result)
        }
    })
});

