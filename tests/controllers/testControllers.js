const request = require('supertest');
const app = require('../../src/app');
const { createUser, updateUser } = require('../../src/controllers/userController');

describe('User Controller Tests', () => {
  // Tests pour la fonction createUser
  test('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('id');
  });

  // Tests pour la fonction updateUser
  test('should update an existing user', async () => {
    const res = await request(app)
      .put('/api/users/1')
      .send({ username: 'updateduser' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'User updated successfully');
  });
});
