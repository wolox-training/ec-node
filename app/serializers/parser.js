exports.nameParse = (userParams, password, admin = false) => ({
  first_name: userParams.firstName,
  last_name: userParams.lastName,
  email: userParams.email,
  password,
  admin
});
