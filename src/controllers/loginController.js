const axios = require('axios')

var contador=0;

exports.FormRender = (req, res) => {
    console.log(req.query.valid);
    //Primeravez que si ingresa al login
    if (req.query.valid == undefined)
    {
        res.render('loginView', {
            validacion:'0',
            contador:contador
        })
    }
    else
    {
        
            res.render('loginView', {
                validacion:req.query.valid,
                contador:contador
            })
        
    }
}

exports.getQuery = (req, res) => {
    console.log(contador);
    axios.get(`https://apitestrecetario.onrender.com/user/login/${req.body.username}/${req.body.password}`).then(resp => {
        console.log(resp.data);
        if (resp.data == "No se encontro el usuario") {            
            console.log("Las credenciales no coinciden")
            contador=contador+1;
            res.redirect("/login?valid="+"1")
        }

        if (resp.data[0].estatus_confirmacion == 1) {
            console.log("Sesion iniciada")
        }
        if (resp.data[0].estatus_confirmacion ==0)
        {
            contador=contador+1;
            console.log("Cuenta no verificada")
            res.redirect("/login?valid="+"2")
        }


        // if (res.data != "No se encontro el usuario")
        // {
        //     if(resp.data[0].estatus_confirmacion !=0)
        //     {
        //         console.log("Sesion iniciada")
        //     }
        //     else
        //     {
        //         console.log("Cuenta no verificada")
        //     }

        //     console.log(resp.data[0].estatus_confirmacion);
        // }
        // else
        // {
        //     console.log("Las credenciales no coinciden")
        // }


    })
}