const fun = require('./sscfn');
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