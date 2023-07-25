import User from '../entities/User.js';
test('Student constructor throws an error if required fields are missing', () => {
  expect(() => new User({ firstName: 'James' })).toThrow(
    'Required properties are missing!',
  );
});

it('Returns correct full name', () => {
  const user = new User({ firstName: 'James', lastName: 'Smith' });
  const fullName = 'James Smith';

  expect(user.fullName).toEqual(fullName);
});
