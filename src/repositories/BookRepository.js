const Test = require('../models/Test');
const AbstractRepository = require("./AbstractRepository");

class BookRepository extends AbstractRepository{
    static getModel(){
        return Test;
    }
}

module.exports=BookRepository;