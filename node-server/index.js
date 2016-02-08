var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('database');
var express = require('express');
var restAPI = express();

db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS counts (key TEXT, value INTEGER)");
  db.run("INSERT INTO counts (key, value) VALUES (?, ?)", "counter", 0);
});

restAPI.get('/rest', function (request, response) {
  db.get("SELECT value FROM counts", function (err, row) {
    response.json({'count': row.value});
  })
})

restAPI.post('/rest', function (request, response) {
  db.run('UPDATE counts SET value = value + 1 WHERE key = ?', 'counter', function (err, row) {
    if (err) {
      console.error(err);
      response.status(500);
    } else {
      response.status(202);
    }
    response.end();
  })
})

restAPI.listen(3000);

console.log('restAPI running on localhost:3000/rest');
