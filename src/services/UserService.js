const Service = require('./Service');
class UserService extends Service {
    constructor(app) {
        super(app);
        this.userRepository = this.getRepository('UserRepository');
        this.DAYS_EXPIRES = 7;
    }

    async login({
                    email,
                    password,
                }) {
        try {
            const queryBuilder = this.userRepository
                .get({
                    email,
                })
                .first();
            let user = await queryBuilder;
            if (!user) {
                return [false, this.getErrorCode("LOGIN_FAILED"), []];
            }
            const expiresIn = this.app
                .moment()
                .add(this.DAYS_EXPIRES, "days")
                .unix();
            if (this.app.bcrypt.compareSync(password, user.password)){
                const token = this.app.jwt.sign({
                    ...{
                        id: user.id,
                        email: user.email,
                        full_name : user.full_name,
                    },
                    expiresIn,
                });
                const response = {
                    token: token,
                    expiresIn: expiresIn,
                    user: {
                        id: user.id,
                        email: user.email,
                        full_name : user.full_name,
                    },
                };
                return [true, 0, [response]];
            }


        } catch (error) {
            console.log({ error });
            return [false, 1000, []];
        }
    }

}

module.exports = UserService;
