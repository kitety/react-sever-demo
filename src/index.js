const express = require("express");
const app = express();
const Home = require("./containers/Home/index");
const port = 3000;

app.get("/", (req, res) => res.send("<h1>Hello</h1>"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
