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
  