require('dotenv').config()
const Admin = require ('./Models/Admin')
const mongoose = require('mongoose') 
const axios = require ('axios')

beforeAll(async (done) => {
  
const {
    PORT = 7000,
    MONGO_DNS_SRV,
    MONGO_AUTH,
    MONGO_CLUSTER,
    MONGO_DB_NAME,
    MONGO_OPTIONS
  } = process.env
  
    
      mongoose.connect(`${MONGO_DNS_SRV}${MONGO_AUTH}${MONGO_CLUSTER}${MONGO_DB_NAME}${MONGO_OPTIONS}`, {
        useNewUrlParser: true
      })
      done()
    
});



  const funcs = require('./AdminFN');

  test('Get all admins', async () => {
  //  expect.assertions(1);
    const response = await funcs.getAllAdmins();
 //   console.log(response.data)
   expect(response).not.toEqual(0);
  //  expect(Array.isArray(response.data)).toBe(true);
  });
  

  
  test('POST should create a new Admin', async () => {
    // expect.assertions(2);

    const att={
    "userName": "gmela",
    "firstName": "3slen",
    "lastName": "om ahmad",
    "email": "7elwa@gmail.com",
    "age": 19,
    "ssn": 12342021880113,
    "gender": "female",
    "isLogged": true,
    "password": "2759034",
    "address": "home7",
    "salary": 50000,
    "phoneNumber": 421642654,
    "fax": 5331,
    "fullAccess": true,
    "workLocation":"nasa"}

    const adm= await Admin.find()
    
    const response = await funcs.createAdmin(att);
  
    const admupd= await Admin.find()

    expect(admupd.length-adm.length).toBe(1)
 
  })
  

  test('UPDATE specific Admin', async () => {
    const att ={
      "email" : "haha@hotmail.com",
      "age" : 27
    }
    const userName="so3ad";
    const Admin = await funcs.updateAdmin(userName,att);
    expect(Admin.data.data.email).toBe("haha@hotmail.com");
    expect(Admin.data.data.age).toBe(27);
  });




  
  test('DELETE specific Admin', async () => {
    const userName ="ahmmaaad"
  //  const Admins = await Admin.find();

    

    const response= await funcs.deleteAdmin(userName);
    console.log(response.data.msg)
    expect(response.data.msg).toEqual('Admin deleted successfully')
  //  const adminsUpdated= await Admin.find();

 //   expect(Admins.length - adminsUpdated.length).toBe(1);
  });
  


   test(`GET an Admin`, async () => {
     const userName='so3ad'
    expect.assertions(1)
    const Admin =  await funcs.getAdmin(userName)
 
     expect(Admin.data.data.firstName).toEqual('khaled')
   });




 
  
const funcs = require('./fnInvestor');


  test('POST should create a new investor', async (done) => {
    const investors = await funcs.createinvestor();
    investorss = investors.data.data;
    expect(investorss.userName).toBe('saleh');
    done()
  })

  test(`investor's name should be saleh`, async (done) => {
    let investors = await funcs.get()
    investorss = investors.data.data;
    //console.log(investorss.some(investor => investor.userName === 'saleh'))
     expect(investorss.some(investor => investor.userName === 'saleh')).toBe(true)
    done()
  } );

  test('GET specific investor', async (done) => {
    const investors = await funcs.getinvestor();
    investorss = investors.data.data;
    expect(investorss.userName).toBe('saleh');
    done()
  });

  test('UPDATE specific investor', async (done) => {
    const investors = await funcs.updateinvestor();
    investorss = investors.data.data;
    expect(investorss.name).toBe('mohamed');
    done()
  });
  
  test('DELETE specific investor', async (done) => {
    let investors = await funcs.deleteinvestor()
    investorss = investors.data.data;
    //console.log(investorss.some(investor => investor.userName === 'saleh'))
    expect(investorss.some(investor => investor.userName === 'saleh')).toBe(false)
    done()

  });

const funcs = require('./spcfn');

  test(`Created a company with a name of 'hamada'`, async (done) => {
    //expect.assertions(0)
    // await new Promise(resolve => setTimeout(resolve, 1000));

    let Spcs = await funcs.createSpc()
    Spcss = Spcs.data.data;
     expect(Spcss.companyName).toBe('hamada2');
    done()
  } );



  test(` get All Spc`, async (done) => {
  
    let Spcs = await funcs.getSpcAll()
    Spcss = Spcs.data.data;
    console.log(Spcss.some(Spc => Spc.companyName === 'hamada2'))
     expect(Spcss.some(Spc => Spc.companyName === 'hamada2')).toBe(true)
    done()
  } );

  test('UPDATE specific Spc', async (done) => {
    const Spcs = await funcs.updateSpc();
    Spcss = Spcs.data.data;
    expect(Spcss.companyName).toBe('mesh hamada');
    done()
  });


  test('GET specific Spc', async (done) => {
    const Spcs = await funcs.getSpc();
    Spcss = Spcs.data.data;
    expect(Spcss.companyName).toBe('mesh hamada');
    done()
  });

 


test('DELETE specific Spc', async (done) => {
    let Spcs = await funcs.deleteSpc()
    Spcss = Spcs.data.data;
    //console.log(Spcss.some(Spc => Spc.companyName === 'hamada'))
     expect(Spcss.some(Spc => Spc.companyName === 'mesh hamada')).toBe(false)
    done()
  }); 

  afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.disconnect()
    done();
  });
  

  var fun = require('./sscfn');
global.Promise = jest.requireActual('promise');


test ('get unapproved Ssc forms',async(done) =>{
    //  expect.assertions(1)
       let ssc = await fun.getUnapprovedSSC()
       s = ssc.data.data;
      expect(s.some(SscForm => SscForm.approval ===false))
      done()
     });

test ('get approved Ssc forms',async(done) =>{
    //  expect.assertions(1)
       let ssc = await fun.getUnapprovedSSC()
       s = ssc.data.data;
      expect(s.some(SscForm => SscForm.approval ===true))
      done()
     });    
     



test ('create Ssc',async(done) =>{
        let ssc = await fun.createSsc();
        s = ssc.data.data.companyName;
     expect((SscForm => SscForm.companyName ==='YaRab'))
    done()
      });

test ('delete Ssc Form',async(done) =>{
        
        let ssc = await fun.deleteSsc()
        ssc = ssc.data.data.companyName;
       expect((SscForm => SscForm.companyName ==='test'))
       done()
      });

/*
      test ('update Ssc Forms',async() =>{
  
           let ssc = await fun.updateSsc()
           s = ssc.data.data.companyName;
          expect(SscForm => SscForm.companyName ==='Monaco inc.')
          done()
         });    */

  const funcs = require('./Reviewerfn');
  global.Promise = jest.requireActual('promise');
  
   test ('get Reviewer',async(done) =>{
  //  expect.assertions(1)
     let reviewers = await funcs.getReviewers()
     Rev = reviewers.data.data;
     console.log(Rev.some(Reviewer => Reviewer.username ==='test'))
    expect(Rev.some(Reviewer => Reviewer.username ==='test'))
    done()
   });
   
      test ('delete ReviewerbyUserName',async(done) =>{
          
            let reviewers = await funcs.deleteReviewer()
            Rev = reviewers.data.data.username;
         //   console.log(Rev.some(Reviewer => Reviewer.username ==='Ismail33'))
           expect((Reviewer => Reviewer.username ==='de3bs69'))
             //Rev.some
          // expect.assertions(1)
           done()
          });
   
  
  
  
   test ('create Reviewer',async(done) =>{
          
      let reviewers = await funcs.createReviewer()
      Rev = reviewers.data.data.username;
   expect((Reviewer => Reviewer.username ==='de3bss'))
  done()
    });
  
    jest.setTimeout(1000);
    test ('Update Reviewer',async() =>{
          
      const reviewers = await funcs.updateReviewer()
      Rev = reviewers.data.data.username;
      expect((Reviewer => Reviewer.username ==='de3bss'))
  
    });

  const funcs = require('./companyFn');

  global.Promise = jest.requireActual('promise');
 
 
 
  test ('get Company',async(done) =>{
 
 
    let Companies = await funcs.getCompanies()
 
    Comps = Companies.data.data;
 
    console.log(Comps.some(Company => Company.name ==='SEiansCo'))
 
   expect(Comps.some(Company => Company.name ==='SEiansCo'))
 
   done()
 
  });
 
  
 
    test ('delete CompanybyName',async(done) =>{
 
         
 
           let Companies = await funcs.deleteCompany()
 
           Comps = Companies.data.data.name;
 
        
 
          expect((Company => Company.name ==='Keksooo'))
 
 
          done()
 
         });
 
  
 
 
 
 
 
 
 
  test ('create Company',async(done) =>{
 
         
 
     let Companies = await funcs.createCompany()
 
     Comps = Companies.data.data.name;
 
  expect((Company => Company.name ==='Keksooo'))
 
 done()
 
   });
 
 
 
   
 
  test ('Update Company',async(done) =>{
 
     const Companies = await funcs.updateCompany()
 
     Comps = Companies.data.name;
 
     expect((Company => Company.name ==='Keksooo'))
 
 done()
 
   });
 afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.disconnect()
    done();
  });
 
