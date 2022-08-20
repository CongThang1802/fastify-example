const tags = [
    'Card'
]

const headers = {
    type: 'object',
    properties: {
        Authorization: {
            type: 'string',
            description: 'Bearer [token]'
        }
    },
    // required: ['authorization']
}

const createCardSchema = {
    tags,
    headers,
    body: {
        type: 'object',
        properties: {
            type: {
              type: 'number'
            },
            user_card_name: {
                type: 'string'
            },
            user_card_phone: {
                type: 'string'
            },
            user_telegram: {
                type: 'string'
            },
        },
        required: ['type','user_card_name', 'user_card_phone','user_telegram']
    },
};
const updateCardSchema = {
    tags,
    headers,
    body: {
        type: 'object',
        properties: {
            type: {
                type: 'number'
            },
            user_card_name: {
                type: 'string'
            },
            user_card_phone: {
                type: 'string'
            },
            user_telegram: {
                type: 'string'
            },
        },
    },
};
const getCardByIDSchema = {
    tags,
    headers,
    params: {
        type: 'object',
        properties: {
            id: {
                type: 'number'
            }
        }
    }
}
const listCardSchema = {
    tags,
    headers,
}
module.exports = {
    createCardSchema,
    updateCardSchema,
    getCardByIDSchema,
    listCardSchema
}
