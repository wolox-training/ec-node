const { user } = require("../models/index")

module.exports = {
    //login 
    // signIn(req, res){

    // },
    //Registro
    signUp(req,res){
        user.create({
            first_name: req.body.first_name,
            last_name : req.body.last_name,
            email: req.body.email,
            password: req.body.password
        });
    }
}