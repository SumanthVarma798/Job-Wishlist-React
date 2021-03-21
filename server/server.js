const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const PORT = 3002;

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Sumanth_798",
  database: "jobsdb",
});

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
  const formDetails = req.body;
  db.query(
    "INSERT INTO jobs (company_name, role, time_added) VALUES (?, ?, NOW())",
    [formDetails.company, formDetails.role],
    (err) => {
      if (err) console.error(err);
    }
  );
});

app.delete("/:id", (req, res) => {
  db.query("DELETE FROM jobs WHERE id = ?", req.params.id, (err) => {
    if (err) console.error(err);
  });
});

app.listen(PORT, () =>
  console.log("MySQL server listening on port " + PORT + "...")
);
