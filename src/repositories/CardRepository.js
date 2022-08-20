const Repository = require('./Repository');

class CardRepository extends Repository {
    constructor(app) {
        super(app);
        this.table = 'cards';
    }
}

module.exports = CardRepository;