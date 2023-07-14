const express = require("express");
const router = express.Router();

const db = require("../../src/config/db.config");
const mysql = require("mysql");
const connection = mysql.createConnection(db.database);
const checkValidation = require("../utils/validations");

connection.connect(function (err) {
  if (err) {
    console.log(err.message);
  } else {
    console.log("connected to the mysql server");
    var bookTable =
      "CREATE TABLE IF NOT EXISTS book (book_ID INT PRIMARY KEY, book_name varchar(255), book_author varchar(255), book_price double)";
    connection.query(bookTable, function (err, result) {
      if (err) throw err;
      if (result.warningCount === 0) {
        console.log("book table created");
      }
    });
  }
});

//get all
router.get("/", (req, res) => {
  var query = "SELECT * FROM book";
  connection.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

//save
router.post("/", (req, res) => {
  const book_ID_data = req.body.book_ID;
  const book_name_data = req.body.book_name;
  const book_author_data = req.body.book_author;
  const book_price_data = req.body.book_price;

  var query =
    "INSERT INTO book (book_ID,book_name,book_author,book_price) VALUES (?,?,?,?)";
  connection.query(
    query,
    [book_ID_data, book_name_data, book_author_data, book_price_data],
    (err) => {
      if (err) {
        res.send({ message: "Error" });
        //throw err;
      } else {
        res.send({ message: "book added" });
      }
    }
  );
});

//update
router.put("/", (req, res) => {
  const book_ID_data = req.body.book_ID;
  const book_name_data = req.body.book_name;
  const book_author_data = req.body.book_author;
  const book_price_data = req.body.book_price;
  var query =
    "UPDATE book SET book_name=?,book_author=?,book_price=? WHERE book_ID=?";
  connection.query(
    query,
    [book_name_data, book_author_data, book_price_data, book_ID_data],
    (err, rows) => {
      if (err) {
        throw err;
      } else {
        if (rows.affectedRows > 0) {
          res.send({ message: "book updated" });
        } else {
          res.send({ message: "book not found" });
        }
      }
    }
  );
  console.log(req.body);
});

//delete
router.delete("/:book_ID", (req, res) => {
  const id = req.params.book_ID;
  var query = "DELETE FROM book WHERE book_ID=?";
  connection.query(query, [id], (err, rows) => {
    if (err) console.log(err);
    if (rows.affectedRows > 0) {
      res.send({ message: "book deleted" });
    } else {
      res.send({ message: "book not found" });
    }
  });
});

//search
router.get("/:book_name", (req, res) => {
  const book_name = req.params.book_name;
  const book_author = req.body.book_author;
  var query = "SELECT * FROM book WHERE book_name=? OR book_author=?";
  connection.query(query, [book_name, book_author], (err, rows) => {
    if (err) console.log(err);
    res.send(rows);
  });
});
module.exports = router;
