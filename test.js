const funcs = require('./fn');

test('Lawyer requests should come as an array', async () => {
  expect.assertions(1);
  const lawyers = await funcs.getLawyers();
  expect(Array.isArray(lawyers.data.lawyers)).toBe(true);
});

test('POST should create a new lawyer', async () => {
  // expect.assertions(2);
  const lawyer = await funcs.createLawyer();
  expect(lawyer.data.lawyer.fullname).toBe('Mo7sen Mofty el Sombaty');
  expect(lawyer.data.lawyer.username).toBe('7amada123');
})

test('GET specific lawyer', async () => {
  const lawyer = await funcs.getLawyer();
  expect(lawyer.data.lawyer.fullname).toBe('Mo7sen Mofty el Sombaty');
  expect(lawyer.data.lawyer.username).toBe('7amada123');
});

test('UPDATE specific lawyer', async () => {
  const lawyer = await funcs.updateLawyer();
  expect(lawyer.data.lawyer.fullname).toBe('Mo7sen Mofty el Sombaty');
  expect(lawyer.data.lawyer.username).toBe('7amada123');
});

test('DELETE specific lawyer', async () => {
  const lawyer = await funcs.deleteLawyer();
  expect(lawyer.data.residue.fullname).toBe('Mo7sen Mofty el Sombaty');
  expect(lawyer.data.residue.username).toBe('7amada123');
});

// test(`User's name should be  Leanne Graham`, async () => {
//   expect.assertions(1)
//   const user =  await funcs.getUser()
//   expect(user.data.name).toEqual('Leanne Graham')
// });
