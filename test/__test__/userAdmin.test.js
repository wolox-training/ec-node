const request = require('supertest');
const app = require('../../app');
const User = require('../../app/models').users;
const mockUserAdmin = require('../mockUserAdmin');
const helper = require('../../app/helpers/helpers');

describe.skip('Should get a user', () => {
  let findOneMock = 0;
  let adminRoleMock = 0;
  test('Should give the user the rol of administrator', async () => {
    adminRoleMock = jest.spyOn(helper, 'adminRole').mockResolvedValueOnce(mockUserAdmin.mock1);
    await request(app)
      .post('/admin/users')
      .send(mockUserAdmin.test1)
      .expect(200);
    expect(adminRoleMock).toHaveBeenCalled();
  });
  test('should return user not found', async () => {
    findOneMock = jest.spyOn(User, 'findOne').mockRejectedValueOnce(mockUserAdmin.mock2);
    await request(app)
      .post('/admin/users')
      .send(mockUserAdmin.test2)
      .expect(400);
    expect(findOneMock).toHaveBeenCalled();
  });
});
