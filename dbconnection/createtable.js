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
    con.query("CREATE TABLE STUDENT(SR_NO INT AUTO_INCREMENT PRIMARY KEY,NAME VARCHAR(255),ADDRESS VARCHAR(255),AGE INT(3),GRADE VARCHAR(1))",(err,result)=>{
        if(err){
            console.log("Error Message:",err)
        }
        else{
            console.log("Table Created sucessfully.")
        }
    })
});

