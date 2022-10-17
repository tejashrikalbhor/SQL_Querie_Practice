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
    // const sql = "CREATE TABLE EMP(SRNO INT PRIMARY KEY AUTO_INCREMENT,NAME VARCHAR(255),AGE INT)";
    // // const sql = "ALTER TABLE STUDENT ADD COLUMN PROF_NAME VARCHAR(255)";
    // con.query(sql,(err,result)=>{
    //     if(err){
    //         console.log("Error Message:",err)
    //     }
    //     else{
    //         console.log("Table Created sucessfully.")
    //     }
    // });

    
const SQL = "CREATE TABLE EMP_AUDIT(SRNO INT PRIMARY KEY AUTO_INCREMENT ,AUDIT_DESCRIPTION VARCHAR(255))" ;
con.query(SQL,(err,result)=>{
    if(err){
        console.log("Error Message:",err);
    }
    else{
        console.log("Table Created Sucessfully.");
    }
})

});

