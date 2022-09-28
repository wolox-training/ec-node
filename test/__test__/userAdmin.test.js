const request = require('supertest');
const app = require('../../app');
const User = require('../../app/models').users;
const mockUserAdmin = require('../mockUserAdmin');
const helper = require('../../app/helpers/helpers');

describe('Should get a token', () => {
  let findOneMock = 0;
  let adminRoleMock = 0;
  beforeEach(() => {
    adminRoleMock = jest.spyOn(helper, 'adminRole').mockResolvedValueOnce(mockUserAdmin.mock1);
    findOneMock = jest.spyOn(User, 'findOne').mockRejectedValueOnce(mockUserAdmin.mock2);
  });
  test('Should log all user', async () => {
    await request(app)
      .post('/admin/users')
      .send(mockUserAdmin.test1)
      .expect(200);
    expect(adminRoleMock).toHaveBeenCalled();
  });
  test('should retrun unauthorized', async () => {
    await request(app)
      .post('/admin/users')
      .send(mockUserAdmin.test2)
      .expect(400);
    expect(findOneMock).toHaveBeenCalled();
  });
});
