const UsuárioController = require('../controller/Usuário');

module.exports = (app) => {

    app.route('/v1/Usuário')
        .get(UsuárioController.allUsuário)
        .post(UsuárioController.newUsuário)
}