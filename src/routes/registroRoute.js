var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController")

router.get("/", registroController.FormRender);



module.exports = router;
