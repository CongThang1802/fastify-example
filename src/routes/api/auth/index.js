const UserController = require('./controller');
const { loginSchema } = require('./schema');
const { loginRules } = require('./validation');
const authRoutes = async (app, options) => {

    const userController = UserController(app);
    app.post('/login', {
        schema: loginSchema,
        preValidation: [
            app.detect_spam(),
            app.validate(loginRules),
        ]
    }, userController.login);
};


module.exports = authRoutes;