require("dotenv").config();
const express = require("express")
const db = require("./db/index.js");
const fetch = require('node-fetch');

// get all California cities
(async () => {
  const response = await fetch(
    'https://parseapi.back4app.com/classes/CA?limit=1080&order=name&keys=name',
    {
      headers: {
        'X-Parse-Application-Id': 'YV6GTTBZe2seEMboA5c44F9eXledturUyBFmQwkD', // This is the fake app's application id
        'X-Parse-Master-Key': 'WCx4AtqgKzDpQllBdBqeBqlpEzlr5EhfRWSbeI0n', // This is the fake app's readonly master key
      }
    }
  );
  const data = await response.json(); // Here you have the data that you need
  for (let i = 0; i < data.results.length; i++) {
    await insertCity([i, data.results[i].name])
  }
})();

// params: [id, city]
const insertCity = async (params) => {
    const results = await db.query("INSERT INTO cities(id, name) values ($1, $2) returning *", params);
}