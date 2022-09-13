exports.nameParse = (userParams, password) => ({
  first_name: userParams.firstName,
  last_name: userParams.lastName,
  email: userParams.email,
  password
});
