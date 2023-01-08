const mysql = require ('mysql')
const fs =require('fs')
var db = mysql.createConnection({
    host: "localhost",
    user: "Apoorva",
    password: "passcode",

})
db.connect(function(err){
if(err)throw err
console.log("connected");
var sql = "Create database emp ";
db.query (sql , function (err, result ){
    //if (err) throw err;
    console.log("db created");
})

}
);
var db2 = mysql. createConnection({
    host: "localhost",
    user: "Apoorva",
    password: "passcode",
    database: "emp"

})

db2. connect(function(err){
    if (err)
    throw err;
})
var sql = "CREATE TABLE emp (name VARCHAR (255) , eid INT PRIMARY KEY )";
db2.query(sql, function(err, result )
{
    //if (err)
    //throw err;
})
sql = "INSERT INTO emp VALUES('Apoorva', 100),('Bidura', 200)";
db2.query (sql, function(err, result )
{
    if (err)
    throw err;
}
)
sql = "SELECT * FROM emp";
db2.query (sql, function (err, result)
{
    if(err)
    throw err;
    console.log(result)
    fs.writeFile('./emp.json',JSON.stringify(result), function (err)
    {
        if (err)
        throw err;

    })

})