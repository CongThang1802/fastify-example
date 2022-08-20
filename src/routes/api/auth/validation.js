module.exports = {
    loginRules: {
        email: 'required|email|minLength:6|maxLength:50',
        password: 'required|minLength:8|maxLength:50',
    },
}