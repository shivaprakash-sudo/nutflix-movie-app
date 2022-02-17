import express from 'express';
import mysql from 'mysql'

const app = express();
const localPort = 5500;

const db = mysql.createPool(
    {
        host: "localhost",
        user: "root",
        password: "12345",
        database: "Nutflix"
    }
);

// run this once and see if it works, if it 
// doesn't work, you need to create the database 
// and its tables manually
// let sqlStatements = "CREATE TABLE users (id SERIAL,firstName varchar(255),lastName varchar(255),favourite_movies varchar(255)); INSERT INTO users (firstName,lastName,favourite_movies)VALUES('Anona','Cruz','tt0848228,tt4154756,tt2395427,tt4154796'),('Camilla','Sayer','tt4154756,tt10515848,tt0120575'),('Ganesh','Zentai','tt0287871,tt2975590,tt0103776,tt4116284,tt2313197'),('Vivien','Straub','tt0926084,tt0417741'),('Bernardita','Bishop','tt0389860');"

let sqlStatements = "SELECT * FROM Users;";

db.query(sqlStatements, (err, result) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(result[1].favourite_movies);
        console.log("Succesfully retreived the data");
    }
});

// get requests
app.get("/", (req, res) => {

})

// app.post("/api/add-favorite", (req, res) => {
//     const movieID = req.body.movieID;
//     const sqlAdd = "UPDATE users SET favourite_movies=? WHERE favourite_movies=?";
//     db.query(sqlAdd, [movieID,])
// });

app.post("/register", (req, res) => {
    const { firstName, lastName, password } = req.body;
    const sqlInsert = "INSER INTO Users (firstName, lastName, password) VALUES(?,?,?);"
    db.query(sqlInsert, [firstName, lastName, password])
})

app.listen(localPort || process.env.PORT, () => {
    console.log(`Listening on ${localPort}`);
});