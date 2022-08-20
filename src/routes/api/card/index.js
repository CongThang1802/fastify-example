const CardController = require('./controller');
const { createCardSchema, updateCardSchema, getCardByIDSchema, listCardSchema } = require('./schema');
const { createCardRules, updateCardRules, getByIdRules } = require('./validation');
const cardRoutes = async (app, options) => {

    const cardController = CardController(app);
    app.post('/create', {
        schema: createCardSchema,
        preValidation: [
            app.authenticated,
            app.validate(createCardRules),
        ]
    }, cardController.createCard);
    app.put('/update/:id', {
        schema: updateCardSchema,
        preValidation: [
            app.authenticated,
            app.validate(updateCardRules),
            app.validate(getByIdRules,'params')
        ]
    }, cardController.updateCard);
    app.get('/:id', {
        schema: getCardByIDSchema,
        preValidation: [
            app.authenticated,
            app.validate(getByIdRules,'params'),
        ]
    }, cardController.getCardByID);
    app.get('/', {
        schema: listCardSchema,
        preValidation: [
            // app.authenticated,
        ]
    }, cardController.listCard);
};


module.exports = cardRoutes;