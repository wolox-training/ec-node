const request = require('supertest');
const app = require('../../app');
const weetControler = require('../../app/controllers/weets');
const mockWeet = require('../mockWeet');

describe('Should get a weet from the API', () => {
  let weetServiceMock = 0;
  beforeEach(() => {
    weetServiceMock = jest
      .spyOn(weetControler, 'createWeet')
      .mockResolvedValueOnce(mockWeet.weetCreated)
      .mockRejectedValueOnce(mockWeet.weetFailed);
  });
  afterEach(() => {
    weetServiceMock.mockClear();
  });
  test('Should save the user weet', async () => {
    await request(app)
      .post('/weets')
      .set(`authToken${mockWeet.responseSuccess}`)
      .expect(201);
    expect(weetServiceMock).toHaveBeenCalled();
  });
  test('shoud not save a weet', async () => {
    await request(app)
      .post('/weets')
      .send(mockWeet.badTest)
      .expect(401);
    expect(weetServiceMock).not.toHaveBeenCalled();
  });
});
