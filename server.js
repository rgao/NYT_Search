const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bluebird = require("bluebird")

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/public"));
};

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/nytreact", { useNewUrlParser: true, useUnifiedTopology: true }, { promiseLibrary: bluebird });

const routes = require("./routes/index.js");
app.use(routes);

app.listen(PORT, function () {
    console.log(`API Server now listening on PORT ${PORT}!`);
});