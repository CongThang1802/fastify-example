const cardService = require('../../../services/CardService');
module.exports = function(app) {

    const CardService = new cardService(app);
    return {
        createCard: async (request, reply) => {
            const { body } = request;
            const [status, code, data] = await CardService.createCard({body});
            return {
                status,
                code,
                msg: status ? 'success' : 'failed',
                data,
            }
        },
        updateCard: async (request, reply) => {
            const { body,params } = request;
            const [status, code, data] = await CardService.updateCard({body,params});
            return {
                status,
                code,
                msg: status ? 'success' : 'failed',
                data,
            }
        },
        getCardByID: async (request, reply) => {
            const { params } = request;
            const [status, code, data] = await CardService.getCardByID({params});
            return {
                status,
                code,
                msg: status ? 'success' : 'failed',
                data,
            }
        },
        listCard: async (request, reply) => {
            const { query } = request;
            const [status, code, data] = await CardService.listCard({query});
            return {
                status,
                code,
                msg: status ? 'success' : 'failed',
                data,
            }
        },
    }
}
