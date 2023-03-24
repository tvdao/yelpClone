require("dotenv").config();
const express = require("express")
const db = require("./db/index.js");
const cors = require("cors");

const app = express()

// Middleware

app.use(cors());
app.use(express.json())

// Route Handlers

// Get all restaurants
// http://localhost:4000/api/v1/restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    try {
        const results = await db.query("SELECT * FROM restaurants LIMIT 20;");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurant: results.rows,
            }
        })
    } catch(err) {
        console.log(err);
    }
});

// Get all restaurants by city
app.get("/api/v1/restaurants/:city", async (req, res) => {
    try {
        const city = req.params.city;
        const results = await db.query("SELECT * FROM restaurants WHERE city = $1", [city]);
        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            }
        })
    } catch(err) {
        console.log(err);
    }
});

// Get a restaurant
app.get("/api/v1/restaurants/:city/:id", async (req, res) => {
    try {
        const id = req.params.id;
        // parametrized query
        const results = await db.query("select * from restaurants where id = $1", [req.params.id]);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                restaurant: results.rows[0],
            }
        })
    } catch (err) {

    }
});

// Create a restaurant
app.post("/api/v1/restaurants", async (req, res) => {
    try {
        const params = [req.body.name, req.body.location, req.body.price_range];
        const results = await db.query("INSERT INTO restaurants(name, location, price_range) values ($1, $2, $3) returning *", params);
        res.status(201).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        })
    } catch(err) {
        console.log(err);
    }
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const params = [req.body.name, req.body.location, req.body.price_range, req.params.id];
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 returning *", params);
        res.status(200).json({
            status: "success",
            data: {
                restaurant: results.rows[0],
            }
        });
    } catch(err) {
        console.log(err);
    }
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", async (req, res) => {
    try {
        const params = [req.params.id];
        const results = await db.query("DELETE FROM restaurants where id = $1", params);
        res.status(204).json({
            status: "success"
        })
    } catch(err) {
        console.log(err);
    }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is up and listening on port ${PORT}`);
});