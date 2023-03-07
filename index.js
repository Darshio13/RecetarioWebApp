const express = require('express');
var path = require("path");
const bodyParser = require('body-parser');
const axios = require('axios')
//const path = require('path');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.set('port', 3000);
//Uso de rutas
var registroRouter= require("./src/routes/registroRoute")
var loginRouter = require("./src/routes/loginRoute");
app.use("/registro", registroRouter);
app.use("/login", loginRouter);



app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")));



app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

app.get('/',(req, res)=>{
    res.json("HOLAAAA")
})