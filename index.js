const express = require('express');

const app = express();
app.set('port', 4000);

// var userRouter= require("./src/routes/userRoute");
// app.use("/user", userRouter);

app.listen(app.get('port'), () => {
    console.log('Listening on port ', app.get('port'));
});

app.get('/',(req, res)=>{
    res.json("HOLAAAA")
})