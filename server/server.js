require("dotenv").config();
const express = require("express")

const app = express()

//http://localhost:4000/getRestaurants
app.get("/getRestaurants", (req, res) => {
    res.status(200).json({
        status: "success",
        restaurant: "chilis",
    })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server is up and listening on port ${PORT}`);
});