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