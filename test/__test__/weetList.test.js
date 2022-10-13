const request = require('supertest');
const app = require('../../app');
const { Weet } = require('../../app/models');
const mockWeetList = require('../mockWeetList');
const weetService = require('../../app/services/Weets');

describe('Should get a token', () => {
  let findAllWeetsMock = 0;
  let getWeetsMock = 0;
  beforeEach(() => {
    findAllWeetsMock = jest.spyOn(Weet, 'findAll').mockResolvedValueOnce(mockWeetList.findAllWeetsResult);
    getWeetsMock = jest.spyOn(weetService, 'getWeets').mockRejectedValueOnce(mockWeetList.getWeetsResult);
  });
  test('Should log all weets', async () => {
    await request(app)
      .get('/weets')
      .set(mockWeetList.mockToken)
      .send(mockWeetList.paginationExample)
      .expect(200);
    expect(findAllWeetsMock).toHaveBeenCalled();
  });
  test('should return unauthorized', async () => {
    await request(app)
      .get('/weets')
      .set('Invalid Token')
      .expect(401);
    expect(getWeetsMock).not.toHaveBeenCalled();
  });
});
