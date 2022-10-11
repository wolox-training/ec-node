const request = require('supertest');
const app = require('../../app');
const weetService = require('../../app/services/weets');
const mockWeet = require('../mockWeet');

describe('Should get a user', () => {
  let weetServiceMock = 0;
  beforeEach(() => {
    weetServiceMock = jest.spyOn(weetService, 'userWeet').mockResolvedValueOnce(mockWeet.mock1);
  });
  test('Should save the user weet', async () => {
    await request(app)
      .post('/users')
      .send(mockWeet.test1)
      .expect(201);
    expect(weetServiceMock).toHaveBeenCalled();
  });
  test('user should not be found', async () => {
    await request(app)
      .post('/users')
      .send(mockWeet.test4)
      .expect(400);
    expect(weetServiceMock).not.toHaveBeenCalled();
  });
});
