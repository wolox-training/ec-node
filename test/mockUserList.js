const { DEFAULT_ERROR } = require('../app/errors');
const errorMsg = require('../app/constants/errorMessages');

exports.mock1 = [
  {
    id: 1,
    first_name: 'Hola',
    last_name: 'Caamano',
    email: 'Hola@wolox.com',
    password: '$2a$10$zYa7HRng1dtPL3pykCifvuKfBWj9/Y84XLo1yw.5F5Ra0CThfkpg2'
  }
];
exports.mock2 = {
  internalCode: DEFAULT_ERROR,
  message: errorMsg.userFindError
};
exports.test1 = {
  authToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT25saW5lIjp7ImlkIjo4LCJmaXJzdF9uYW1lIjoiSG9sYSIsImxhc3RfbmFtZSI6IkNhYW1hbm8iLCJlbWFpbCI6IkhvbGFAd29sb3guY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkellhN0hSbmcxZHRQTDNweWtDaWZ2dUtmQldqOS9ZODRYTG8xeXcuNUY1UmEwQ1RoZmtwZzIifSwiaWF0IjoxNjY0Mjg1ODAyLCJleHAiOjE2NjQzNzIyMDJ9.5JXfy87zPmQncKTgzj54R7xsNQQxAW8x-r9Eq8IWOLc'
};
exports.test2 = {
  authToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyT25saW5lIjp7ImlkIjo4LCJmaXJzdF9uYW1lIjoiSG9sYSIsImxhc3RfbmFtZSI6IkNhYW1hbm8iLCJlbWFpbCI6IkhvbGFAd29sb3guY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkellhN0hSbmcxZHRQTDNweWtDaWZ2dUtmQldqOS9ZODRYTG8xeXcuNUY1UmEwQ1RoZmtwZzIifSwiaWF0IjoxNjY0Mjg1ODAyLCJleHAiOjE2NjQzNzIyMDJ9.5JXfy87zPmQncKTgzj54R7xsNQQxAW8x-r9Eq8IWOLc'
};
