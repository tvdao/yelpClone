require("dotenv").config();
const express = require("express")
const db = require("./db/index.js");
const morgan = require("morgan")

const app = express()

// Middleware

app.use(express.json())

// Route Handlers

// Get all restaurants
// http://localhost:4000/api/v1/restaurants
app.get("/api/v1/restaurants", async (req, res) => {
    const results = await db.query("SELECT * FROM restaurants");
    console.log(results);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: ["chilis", "dominos"],
        }
    })
});

// Get a restaurant
app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        }
    })
});

// Create a restaurant
app.post("/api/v1/restaurants", (req, res) => {
    console.log(req.body);
    res.status(201).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        }
    })
});

// Update a restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.status(200).json({
        status: "success",
        data: {
            restaurant: "mcdonalds",
        }
    });
});

// Delete a restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is up and listening on port ${PORT}`);
});