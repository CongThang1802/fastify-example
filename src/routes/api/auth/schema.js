const tags = [
    'Auth'
]

const headers = {
    type: 'object',
    properties: {
        Authorization: {
            type: 'string',
            description: 'Bearer [token]'
        }
    },
    required: ['authorization']
}

const loginSchema = {
    tags,
    body: {
        type: 'object',
        properties: {
            email: {
                type: 'string'
            },
            password: {
                type: 'string'
            },
        },
        required: ['email', 'password']
    },
};
module.exports = {
    loginSchema
}
