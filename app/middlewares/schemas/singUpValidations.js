const { checkSchema } = require('express-validator');

exports.checkParam = checkSchema({
  firstName: {
    isUppercase: {
      negated: true
    },
    isLength: {
      errorMessage: 'El nombre debe contener mas de 2 caracteres',
      options: { min: 2 }
    }
  },
  lastName: {
    isUppercase: {
      negated: true
    },
    isLength: {
      errorMessage: 'El apellido debe contener mas de 2 caracteres',
      options: { min: 2 }
    }
  },
  email: {
    isEmail: {
      bail: true
    },
    contains: '@wolox',
    errorMessage: 'El email tiene que se de dominio wolox'
  },
  password: {
    isLength: {
      errorMessage: 'La constraseña debe contener mas de 8 caracteres',
      options: { min: 8 }
    }
  }
});
