module.exports = {
    createCardRules: {
        type:'required|in:0,1',
        user_card_name: 'required|string|maxLength:255',
        user_card_phone: 'required|string|maxLength:255',
        user_telegram: 'required|string|maxLength:255',
    },
    updateCardRules: {
        type:'in:0,1',
        user_card_name: 'string|maxLength:255',
        user_card_phone: 'string|maxLength:255',
        user_telegram: 'string|maxLength:255',
    },
    getByIdRules: {
        id:'required|numeric'
    }
}