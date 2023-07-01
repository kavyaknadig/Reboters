const express = require("express");
const mongoose = require("mongoose");
const app = express();

const router = require("./routes/routes");

const cors = require("cors");

app.use("/api", router);


app.listen(3001, () => {
    console.log("server is running sucessfully");
});

mongoose.connect(
    "mongodb://127.0.0.1:27017/UserDB",
    {
        usenewUrlparser: "true", 
        useUnifiedTopology: "true"
    })
.then(() => {
    console.log("mongodb connection sucessful");
})
.catch((err) => {
    console.log("erorr connecting to mongodb:"+ err.message);
});