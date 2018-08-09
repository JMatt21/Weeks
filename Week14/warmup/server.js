var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Du@F!dgg",
  database: "quotes_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Express and MySQL code should go here.
app.get("/", function(req, res){
  connection.query("SELECT * FROM quotes", function (err, results){
    if (err) throw err;
    res.render('index', { quotes: results })
  });
});

app.post("/", function(req, res){
  connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function (err, result){
    if (err) {
      console.log(err);
      return res.status(500).end();
    }
    res.json({ id: result.insertId });
  });
  
});
app.delete("/:id", function(req, res){
  connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function (err){
    if (err) return res.status(500).end();
  })
  res.status(200).end();
});
// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
