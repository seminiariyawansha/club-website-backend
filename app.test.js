const request = require('supertest');
const app = require('./app');

test('GET /api/health should return 200', async () => {
  const res = await request(app).get('/api/health');
  expect(res.statusCode).toBe(999);
});

test('GET /api/clubs should return 200 and an array', async () => {
  const res = await request(app).get('/api/clubs');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test('GET /api/clubs/it-society should return 200', async () => {
  const res = await request(app).get('/api/clubs/it-society');
  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe('IT Society');
});

test('GET /api/clubs/does-not-exist should return 404', async () => {
  const res = await request(app).get('/api/clubs/does-not-exist');
  expect(res.statusCode).toBe(404);
});

test('POST /api/clubs/:id/join should return 200', async () => {
  const res = await request(app).post('/api/clubs/it-society/join').send({ name: 'Semini' });
  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe('Semini');
});

test('GET /api/events should return 200', async () => {
  const res = await request(app).get('/api/events');
  expect(res.statusCode).toBe(200);
});

test('GET /api/announcements should return 200', async () => {
  const res = await request(app).get('/api/announcements');
  expect(res.statusCode).toBe(200);
});

test('POST /api/contact with missing fields should return 400', async () => {
  const res = await request(app).post('/api/contact').send({ name: 'Semini' });
  expect(res.statusCode).toBe(400);
});

test('POST /api/contact with all fields should return 200', async () => {
  const res = await request(app).post('/api/contact').send({ name: 'Semini', email: 'a@b.com', message: 'Hi' });
  expect(res.statusCode).toBe(200);
});