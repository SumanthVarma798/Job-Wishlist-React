const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const PORT = process.env.PORT || 3305;

const db = mysql.createConnection({
  user: "b2e37ed6790d48",
  host: "us-cdbr-east-03.cleardb.com",
  password: "aecd3564",
  database: "heroku_ffc27e08a25f591",
}); // production DB connection

// const db = mysql.createConnection({
//   user: "root",
//   host: "localhost",
//   password: "Sumanth_798",
//   database: "jobsdb",
// }); // development DB connection

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  db.query("SELECT * FROM jobs", (err, result) => {
    if (err) console.error(err);
    else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  db.query(
    "INSERT INTO jobs (company_name, role, time_added) VALUES (?, ?, NOW())",
    [req.body.company, req.body.role],
    (err) => {
      if (err) console.error(err);
      else {
        console.log("Successfully added the job");
      }
    }
  );
});

app.delete("/:id", (req, res) => {
  db.query("DELETE FROM jobs WHERE id = ?", req.params.id, (err) => {
    if (err) console.error(err);
    else {
      console.log("Successfully deleted the job");
    }
  });
});

app.listen(PORT, () =>
  console.log("MySQL server running on port " + PORT + "...")
);
