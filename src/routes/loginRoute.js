var express = require("express");
var router = express.Router();

var loginController = require("../controllers/loginController")

//Login
router.get("/", loginController.FormRender);
//Enviar Login
router.post("/post", loginController.getQuery);

//Renderizar enviar correo
router.get("/recuperarCuenta", loginController.recoverAcconut);
//Hacer post del correo
router.post("/RecoverUsername", loginController.recoverAccountPost);

//Renderizar Cambio de contraseña
router.get("/SetNewPassword/", loginController.setPassword)

//Cambiar contraseña request
router.post("/ChangePassword/", loginController.ChangePassword)



module.exports = router;
