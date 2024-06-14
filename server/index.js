const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'msa.mobilesales.biz',
  user: 'root',
  password: 'root',
  database: 'aan_dev',
  port: 57307
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// CRUD API

// Create

// Read
app.get('/getQuery', (req, res) => {
  const query = req.query.queryText || '';
  console.log(query)
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
