const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const PORT = process.env.PORT || 3305;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "b2e37ed6790d48",
  host: "us-cdbr-east-03.cleardb.com",
  password: "aecd3564",
  database: "heroku_ffc27e08a25f591",
});

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
