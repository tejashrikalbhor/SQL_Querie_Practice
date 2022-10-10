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
    const sql = "INSERT INTO STUDENT (NAME,ADDRESS,AGE,GRADE,PROF_NAME) VALUES ('RAJ','PUNE',24,'B','PAWAN KUMAR')";
    con.query(sql,(err,result)=>{
        if(err){
            console.log("Error Message:",err)
        }
        else{
            console.log("Values Inserted Sucessfully.")
        }
    })
});

