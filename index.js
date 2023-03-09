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
var homeRouter= require("./src/routes/homeRoute");
app.use("/registro", registroRouter);
app.use("/login", loginRouter);
app.use("/home", homeRouter)



app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "/public")));

//Captcha
app.post('/submit',function(req,res){
    // g-recaptcha-response is the key that browser will generate upon form submit.
    // if its blank or null means user has not selected the captcha, so return the error.
    if(req.body['g-recaptcha-response'] === undefined || req.body['g-recaptcha-response'] === '' || req.body['g-recaptcha-response'] === null) {
      return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
    }
    // Put your secret key here.
    var secretKey = "--paste your secret key here--";
    // req.connection.remoteAddress will provide IP address of connected user.
    var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + "6LemgeEkAAAAAHik6XffFK9urCq4eWHhNmro33Ta" + "&response=" + req.body['g-recaptcha-response'] + "&remoteip=" + req.connection.remoteAddress;
    // Hitting GET request to the URL, Google will respond with success or error scenario.
    request(verificationUrl,function(error,response,body) {
      body = JSON.parse(body);
      // Success will be true or false depending upon captcha validation.
      if(body.success !== undefined && !body.success) {
        return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
      }
      res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
    });
  });

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

app.get('/',(req, res)=>{
    res.json("HOLAAAA")
})