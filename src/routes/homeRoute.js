var express = require("express");
var router = express.Router();

var HomeController = require("../controllers/HomeController")

//Home
router.get("/", HomeController.renderHome);



module.exports = router;
