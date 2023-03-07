const axios = require('axios')


exports.FormRender = (req, res) => {
   res.render('registroView')
}

exports.FormGetPost = (req, res) => {
   console.log(req.body.nUser);

   axios.post(`https://apitestrecetario.onrender.com/user/post/${req.body.nUser}/${req.body.aUser}/${req.body.uUser}/${req.body.cUser}/${req.body.pUser}`)
      .then((response) => {
         console.log(response);
      });
}

exports.ConfirmAccount = (req, res) => {

   //Obtener fecha actual today
   let today = new Date();
   let date =
      today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
   let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   let dateTime = date + " " + time;
   const hoy = new Date(dateTime);

   //Obtener fecha de registro 
   axios.get(`https://apitestrecetario.onrender.com/user/fecha/${req.params.token}`).then(resp => {
      const fechaRegistro = new Date(resp.data);
      console.log(fechaRegistro);
      const resta = (hoy.getTime() - fechaRegistro.getTime()) / 1000
      console.log(resta);


      if (resta > 300) //Pasaron los 5 minutos o mas
      {
         console.log("Correo caducado. Ingresa tus datos de nuevo")
         //Agregar dato de no validacion
         res.render('registroConfirmView', {
            ban:false
         });
      }
      else {
         //Se actualiza la bd con http request

         axios.put(`https://apitestrecetario.onrender.com/user/putstatus/${req.params.token}`)
            .then((response) => {
               console.log(response);
            });
         //Agregar dato de validacion
         res.render('registroConfirmView',{
            ban:true
         });
      }



      return resp.data;
   });






   // if (resta > 300) //Pasaron los 5 minutos o mas
   // {
   //    console.log("Correo no valido. Ingresa tus datos de nuevo")
   //    //Agregar dato de no validacion
   //    res.render('registroConfirmView');
   // }
   // else {
   //    //Se actualiza la bd con http request

   //    axios.put(`https://apitestrecetario.onrender.com/user/putstatus/${req.params.token}`)
   //       .then((response) => {
   //          console.log(response);
   //       });
   //    //Agregar dato de validacion
   //    res.render('registroConfirmView');
   // }



}