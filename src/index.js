require("dotenv").config();
const connectDB = require("./db/db");
const app = require("./app");

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("server is running on port", process.env.PORT);
        });
    })
    .catch((err) => {
        console.log("mongodb connection failed", err);
    });
