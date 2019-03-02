const uuid = require('uuid')

// The User Model
class Reviewer {
    constructor(firstname,middlename,lastname,email,username,password,birthDate,gender,address,yearsOfExperience,hiringDate,salary,unfinished,finished,ssn,phone,id) {
        
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.email=email;
        this.username = username;
        this.password = password;
        this.birthDate = birthDate;
        this.gender= gender;
        this.address= address;
        this.phone = phone;
        this.ssn= ssn;
        this.finished = finished;
        this.unfinished = unfinished;
        this.salary= salary;
        this.hiringDate= hiringDate;
        this.yearsOfExperience = yearsOfExperience;
        this.id=id;
        //this.id = uuid.v4();
    };
};

module.exports = Reviewer