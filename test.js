
const funcs = require('./enfunctions');

test('requests should come as an array', async () => {
  expect.assertions(1);
  const task = await funcs.gettasks();
  expect(Array.isArray(lawyers.data.cases)).toBe(true);
});

test('view un reviewed', async () => {
  const unreviewed = await funcs.getunreviewed();
  expect(Array.isArray(reviewer.data.unreviewed)).toBe(true);
})

test('get all cases', async () => {
  const cases = await funcs.getallcases();
  expect(Array.isArray(Admin.data.cases)).toBe(true);
});

test('request status to be boolean', async () => {
  const accepted = await funcs.trackrequeststate();
  expect(accepted).toBe('true');
});

