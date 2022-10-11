const request = require('supertest');
const app = require('../../app');
const userService = require('../../app/services/users');
const mockSignUp = require('../mockSignUp');

describe.skip('Should get a user', () => {
  let userServiceMock = 0;
  beforeEach(() => {
    userServiceMock = jest
      .spyOn(userService, 'createUser')
      .mockResolvedValueOnce(mockSignUp.mock1)
      .mockRejectedValueOnce(mockSignUp.mock2);
  });
  afterEach(() => {
    userServiceMock.mockClear();
  });
  test('Should save the user in the database', async () => {
    await request(app)
      .post('/users')
      .send(mockSignUp.test1)
      .expect(201);
    expect(userServiceMock).toHaveBeenCalled();
  });
  test('email should be already in database', async () => {
    await request(app)
      .post('/users')
      .send(mockSignUp.test2)
      .expect(503);
    expect(userServiceMock).toHaveBeenCalled();
  });
  test('password should be shorter than requirement', async () => {
    await request(app)
      .post('/users')
      .send(mockSignUp.test3)
      .expect(400);
    expect(userServiceMock).not.toHaveBeenCalled();
  });
  test('First name should be empty', async () => {
    await request(app)
      .post('/users')
      .send(mockSignUp.test4)
      .expect(400);
    expect(userServiceMock).not.toHaveBeenCalled();
  });
});
