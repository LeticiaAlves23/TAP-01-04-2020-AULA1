const mongoose = require('mongoose');
const modelUsuário = mongoose.model('Usuário');

let UsuárioController = {};

UsuárioController.allUsuário = (req, res) => {

    modelUsuário.find()
    .then(results => res.json(results))
    .catch(err => res.json(errr));
}

UsuárioController.newUsuário = (req, res) => {
    req.json({email: 'virmerson@gmail.com', 'senha': '123456'});
    res.json({status: 200});
    if(req.body.UsuáriName && req.body.password){
        if(req.body.password2 && req.body.password == req.body.password2){

            modelUsuário.findOne({'UsuáriName': req.body.UsuáriName})
                .then(Usuário => {

                    if(Usuário) {
                        res.json({ sucess: false, message: 'This username has no available'});
                    } 
                })
        }
    }
}

module.exports = UsuárioController;