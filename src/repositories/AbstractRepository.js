class AbstractRepository{

    static _instance;

    static getInstance(){
        if(this._instance){
            return this._instance;
        }else{
            return new this();
        }
    }

    static getModel(){
        throw new Error('not implemented!');
    }


    async create(params){
        const instance=new (this.constructor.getModel())(params);
        return instance.save();
    }

    async index(){
        return this.constructor.getModel().find({});
    }

    async find(id){
        return this.getModel().find({_id:id});
    }

    async delete(){

    }

    async update(){

    }
}

module.exports=AbstractRepository;