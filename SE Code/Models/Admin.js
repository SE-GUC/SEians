
class Admin {
    constructor(id,userName, firstName,lastName, email, age,ssn,gender
               ,isLogged,password,workLocation,address,sallary
               ,phoneNumber,fax,fullAccess,nationality) {
       // this.id=uuid.v4();;
        this.id           = id;
        this.userName     = userName;
        this.firstName    = firstName;
        this.lastName     = lastName;
        this.email        = email;
        this.age          = age;
        this.ssn          = ssn;
        this.gender       = gender;
        this.isLogged     = isLogged;
        this.password     = password;
        this.workLocation = workLocation;
        this.address      = address;
        this.sallary      = sallary;
        this.phoneNumber  = phoneNumber;
        this.fax          = fax;
        this.fullAccess   = fullAccess;
        // this.nationality = nationality;

    };
}



module.exports = Admin;