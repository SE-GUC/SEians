//const uuid = require('uuid')
class Company{

	constructor(id, name, companyStatus, type, owner){
       this.id = id;
       this.name = name;
       this.companyStatus = companyStatus;
        this.type = type;
        this.owner = owner;
    };
}
module.exports = Company;
