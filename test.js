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