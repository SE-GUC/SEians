const uuid = require('uuid');


class investor {
    constructor(name, sex, nationality,birthDate, age, egID, address, mobilePhone, fax, email, capital, currency, 
        Companies, SSC, password) {
        this.id = uuid.v4(); 
        this.name = name;
        this.sex = sex;
        this.nationality = nationality;
        this.egID = egID;
        /*if(egID.subString(1,3) > getFullYear().subString(2,4)){
            this.birthDate = '19' + egID.subString(1,3) + '-' + egID.subString(3,5) +'-' + egID.subString(5,7)
        }
        else{
            this.birthDate = '20' + egID.subString(1,3) + '-' + egID.subString(3,5) +'-' + egID.subString(5,7)
        }*/
        this.birthDate = birthDate;
        this.age = age;
        // getFullYear() - birthDate.subString(0,4);
        this.address = address;
        this.mobilePhone = mobilePhone;
        this.fax = fax;
        this.email = email;
        this.capital = capital;
        this.currency = currency;
        this.Companies = Companies;
        this.SSC = SSC;
        this.password = password;
    };
}

module.exports = investor