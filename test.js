
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
  