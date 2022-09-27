const request = require('supertest');
const app = require('../../app');
const User = require('../../app/models').users;
const mockUserList = require('../mockUserList');
const userService = require('../../app/services/users');

describe('Should get a token', () => {
  let findAllMock = 0;
  let getUsersMock = 0;
  beforeEach(() => {
    findAllMock = jest.spyOn(User, 'findAll').mockResolvedValueOnce(mockUserList.mock1);
    getUsersMock = jest.spyOn(userService, 'getUsers').mockRejectedValueOnce(mockUserList.mock2);
  });
  test('Should log all user', async () => {
    await request(app)
      .get('/users')
      .send(mockUserList.test1)
      .expect(200);
    expect(findAllMock).toHaveBeenCalled();
  });
  test('should retrun unauthorized', async () => {
    await request(app)
      .get('/users')
      .send(getUsersMock.test2)
      .expect(401);
    expect(getUsersMock).not.toHaveBeenCalled();
  });
});
