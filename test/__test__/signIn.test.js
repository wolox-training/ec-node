const request = require('supertest');
const app = require('../../app');
const User = require('../../app/models').users;
const mockSignIn = require('../mockSingIn');
const helpers = require('../../app/helpers/helpers');

describe('Should get an email and password', () => {
  let findOneMock = 0;
  let decryptPasswordMock = 0;
  beforeEach(() => {
    findOneMock = jest.spyOn(User, 'findOne').mockResolvedValueOnce(mockSignIn.mock1);
    decryptPasswordMock = jest.spyOn(helpers, 'decryptPassword').mockRejectedValueOnce(mockSignIn.mock2);
  });
  test('Should log the user', async () => {
    await request(app)
      .post('/users/sessions')
      .send(mockSignIn.test1)
      .expect(200);
    expect(findOneMock).toHaveBeenCalled();
  });
  test('password should be incorrect', async () => {
    await request(app)
      .post('/users/sessions')
      .send(mockSignIn.test2)
      .expect(500);
    expect(decryptPasswordMock).toHaveBeenCalled();
  });
});
