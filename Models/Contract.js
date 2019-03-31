class Contract {
    constructor(investorName, investorId, investorSSN ,lawyerName, lawyerId, lawyerSSN, date,companyName,companyId) {

        this.investorName=investorName;
        this.investorId=investorId;
        this.investorSSN=investorSSN;
        this.lawyerName=lawyerName;
        this.lawyerId=lawyerId;
        this.lawyerSSN= lawyerSSN;
        this.date=date;
        this.companyName=companyName;
        this.companyId=companyId;
        signature=false;
        
    };
};

module.exports = Contract