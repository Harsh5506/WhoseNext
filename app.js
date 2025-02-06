const express = require("express");
const app = express();
const path = require("path");
app.listen(3000, () => {
    console.log("app is listening");
});
app.get("/WhoseNext", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

