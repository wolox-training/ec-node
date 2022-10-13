const { DEFAULT_ERROR } = require('../app/errors');
const errorMsg = require('../app/constants/errorMessages');

exports.findAllWeetsResult = [
  {
    id: 1,
    userId: 1,
    content:
      'The beginning of the programmer’s wisdom is understanding the difference between getting program to run and having a runnable program.'
  },
  {
    id: 2,
    userId: 1,
    content: 'To err is human – and to blame it on a computer is even more so.'
  },
  {
    id: 3,
    userId: 1,
    content: 'Love does not hurt. Chuck Norris does.'
  },
  {
    id: 4,
    userId: 1,
    content: "Chuck Norris doesn't needs try-catch, exceptions are too afraid to raise."
  }
];
exports.getWeetsResult = {
  internalCode: DEFAULT_ERROR,
  message: errorMsg.userFindError
};
exports.mockToken = {
  authToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT25saW5lIjp7ImlkIjoxLCJmaXJzdF9uYW1lIjoiSnVhcXVpbiIsImxhc3RfbmFtZSI6ImRzYWRzIiwiZW1haWwiOiJFbWlsaW9Ad29sb3guY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkYXpqM1JKSEswb0xLY0liT1VxS2ZlZUo0R1E0ZnkuUzdaQTl6cUpFTUtwbHNKUkJFaFYuLk8iLCJhZG1pbiI6ZmFsc2V9LCJpYXQiOjE2NjU2NzQ5NjQsImV4cCI6MTY2NTc2MTM2NH0.ZCmdv7bnZ4FMeW17YTGADKtTa7lNFt1VIGU-jdTL0Ic'
};
exports.paginationExample = {
  page: 1,
  limit: 3
};
