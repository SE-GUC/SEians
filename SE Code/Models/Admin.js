//const uuid = require('uuid')
class Admin {
    constructor(id,username, fullname, email, age,ssn) {
       // this.id=uuid.v4();;
       this.id=id;
       this.username=username; 
       this.fullname = fullname;
        this.email = email;
        this.age = age;
        this.ssn=ssn;
    };
}

module.exports = Admin;