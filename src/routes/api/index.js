const apiRoutes = async (app) => {

    // app.register(require('./oidc'), {prefix: 'oidc'});
    app.register(require('./auth'), {prefix: 'auth'});
    app.register(require('./card'), {prefix: 'card'});

};

module.exports = apiRoutes;