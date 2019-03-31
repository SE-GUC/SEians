
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




  afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    mongoose.disconnect()
    done();
  });

global.Promise=jest.requireActual('promise');
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
  