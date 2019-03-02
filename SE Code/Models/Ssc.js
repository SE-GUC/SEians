class Ssc{

    constructor(id,companyName, companyNameInArabic, governorate, city, district, telephone, fax, currency, investor, investorId, gender, nationality, idType, idNumber
        , birthdate, address, email, managers, approval){

            this.companyName=companyName;
            this.id=id;
            this.companyNameInArabic=companyNameInArabic;
            this.governorate=governorate;
            this.gender=gender;
            this.city=city;
            this.district=district;
            this.telephone=telephone;
            this.fax=fax;
            this.currency=currency;
            this.investor = investor;
            this.investorId=investorId;
            this.nationality=nationality;
            this.idType=idType;
            this.idNumber=idNumber;
            this.birthdate=birthdate;
            this.address=address;
            this.email=email;
            var time = null;
            this.managers=managers;
            var time = null;
            this.approval =approval;

       
    }




}


module.exports = Ssc;