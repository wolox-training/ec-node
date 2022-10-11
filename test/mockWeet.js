const { DEFAULT_ERROR } = require('../app/errors');
const errorMsg = require('../app/constants/errorMessages');

exports.weetCreated = {
  id: 1,
  userId: 1,
  content: 'Chuck Norris decided to sell his poop as a food product ... we know it now as wheaties.'
};
exports.weetFailed = {
  internalCode: DEFAULT_ERROR,
  message: errorMsg.userFindError
};
exports.responseSuccess =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT25saW5lIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiSnVhcXVpbiIsImxhc3RfbmFtZSI6ImRzYWRzIiwiZW1haWwiOiJFbWlsaW9Ad29sb3guY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkbkZVbjdrYWFUR2RHQ2sxMnlQbVFVT3I0aWhZbEpBVXp1b1dVVE9uSXdkbmNFSHlwRWxVRUciLCJhZG1pbiI6ZmFsc2V9LCJpYXQiOjE2NjU1MjIyNDgsImV4cCI6MTY2NTYwODY0OH0.mYRcs2stEEc-LyJXHb537V8Af_5cYI2WF9o1nHpbt0c';
exports.responseFailed = 'asdfsad';
