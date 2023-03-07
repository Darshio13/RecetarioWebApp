var express = require("express");
var router = express.Router();

var loginController = require("../controllers/loginController")

router.get("/", loginController.FormRender);

router.post("/post", loginController.getQuery);






module.exports = router;
