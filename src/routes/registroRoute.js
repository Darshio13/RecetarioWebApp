var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController")

router.get("/", registroController.FormRender);

router.post("/post", registroController.FormGetPost);

router.get("/confirmAccount/:token", registroController.ConfirmAccount);





module.exports = router;
