const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 8880;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//including html routes into the server file
//(app) means express-routes first because we first pull data to display in html pages;
//api
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});