const userService = require('../../../services/UserService');
module.exports = function(app) {

    const UserService = new userService(app);
    return {
        login: async (request, reply) => {
            const { body } = request;
            const {email,password} = body
            const [status, code, data] = await UserService.login({email,password});
            return {
                status,
                code,
                msg: status ? 'success' : 'failed',
                data,
            }
        },
    }
}
