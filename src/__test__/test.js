import ErrorRepository from '../errorRepository.js';

test('translate error test', () => {
  const data = new ErrorRepository();
  expect(data.translate(14)).toBe('x error');
});
