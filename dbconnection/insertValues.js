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
    const sql = "INSERT INTO STUDENT (NAME,ADDRESS,AGE,GRADE,PROF_NAME) VALUES ?";
    const VALUES = [
        ['PREETI','PUNE',24,'A','PAWAN KUMAR'],
        ['JOHN','MUMBAI',19,'C','HARRY'],
        ['SUZII','KORIEA',18,'B','HARRY'],
        ['HARSH','PUNE',24,'D','POTTER'],
        ['SUNNY','PUNE',24,'E','KUMAR']
    ]
    con.query(sql,[VALUES],(err,result)=>{
        if(err){
            console.log("Error Message:",err)
        }
        else{
            console.log("Values Inserted Sucessfully.")
        }
    })
});

