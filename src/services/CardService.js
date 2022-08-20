const Service = require('./Service');
class CardService extends Service {
    constructor(app) {
        super(app);
        this.cardRepository = this.getRepository('CardRepository');
    }
    async createCard({  body }) {
        try {
            const { user_card_name, user_card_phone, user_telegram ,type} = body
            const result = await this.cardRepository.create({
                type,
                user_card_name,
                user_card_phone,
                user_telegram,
            })
            if (result) {

                return [true, 0, []];
            }
            return [false, this.getErrorCode('ERROR_CREATE_CARD'), []]


        } catch (e) {
            console.log({ 'error': e })
            return [false, this.getErrorCode('OTHER'), []];
        }

    }

    async updateCard({ body, params }) {
        try {
            const { id } = params
            const { user_card_name, user_card_phone, user_telegram ,type  } = body
            const card = await this.cardRepository.getOneOrNull({ id })
            if (card) {
                const dataUpdate = {}
                if (user_card_name){
                    dataUpdate['user_card_name'] = user_card_name
                }
                if (user_card_phone){
                    dataUpdate['user_card_phone'] = user_card_phone
                }
                if (user_telegram){
                    dataUpdate['user_telegram'] = user_telegram
                }
                if (type){
                    dataUpdate['type'] = type
                }
                console.log("dataUpdate", dataUpdate)

                if (this.isEmpty(dataUpdate)) {
                    return [false, this.getErrorCode('NOT_FOUND'), []]
                }
                const data = await this.cardRepository.model().where({id}).update(dataUpdate)
                if (data) {
                    return [true, 0, []];
                }
                return [false, this.getErrorCode('ERROR_UPDATE_CARD'), []]
            }
            return [false, this.getErrorCode('NOT_FOUND_CARD'), []]

        } catch (e) {
            console.log({ 'error': e })
            return [false, this.getErrorCode('OTHER'), []];
        }

    }
    isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    async getCardByID({ params }) {
        try {
            const { id } = params
            const data = await this.cardRepository.get({ id }).first()
            if (data) {
                return [true, 0, data]
            }
            return [true, 0, []]
        } catch (e) {
            console.log({ 'error': e })
            return [false, this.getErrorCode('OTHER'), []];

        }

    }
    async listCard({ query }) {
        try {
            let { page, limit, sort } = query
            if (!limit) limit = 10;
            if (!page) page = 1;
            if (!sort) sort = 'DESC'
            const data = await this.cardRepository.get()
                .orderBy('updated_at', `${sort}`).paginate({
                perPage: limit,
                currentPage: page,
                isLengthAware: true,
            });
            if (data) {
                return [true, 0, data];
            }
            return [true, 0, []]
        } catch (e) {
            console.log({ 'error': e })
            return [false, this.getErrorCode('OTHER'), []];
        }
    }



}

module.exports = CardService;