module.exports = {
  userId: {
    type: 'integer',
    example: 1
  },
  firstName: {
    type: 'string',
    example: 'Emilio'
  },
  lastName: {
    type: 'string',
    example: 'Caamano'
  },
  userEmail: {
    type: 'string',
    example: 'Emilio@wolox.com.ar'
  },
  password: {
    type: 'string',
    example: '12345678'
  },
  User: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/userId'
      },
      firstName: {
        $ref: '#/components/schemas/firstName'
      },
      lastName: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/userEmail'
      },
      password: {
        $ref: '#/components/schemas/password'
      }
    }
  },
  Users: {
    type: 'object',
    properties: {
      users: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/User'
        }
      }
    }
  }
};
