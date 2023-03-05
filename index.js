const express = require('express');

const app = express();
app.set('port', 3000);

//Uso de rutas
var registroRouter= require("./src/routes/registroRoute")
app.use("/registro", registroRouter);

// var userRouter= require("./src/routes/userRoute");
// app.use("/user", userRouter);

app.set('views', __dirname + '/src/views');
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

app.get('/',(req, res)=>{
    res.json("HOLAAAA")
})