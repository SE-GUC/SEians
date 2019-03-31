
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
  