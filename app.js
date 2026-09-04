const express = require('express');
const cors = require('cors');
const { clubs, events, announcements } = require('./data');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/api/clubs', (req, res) => {
  const category = req.query.category;
  const filtered = category ? clubs.filter(c => c.category === category) : clubs;
  res.json(filtered);
});

app.get('/api/clubs/:id', (req, res) => {
  const club = clubs.find(c => c.id === req.params.id);
  if (!club) return res.status(404).json({ error: 'Club not found' });
  const clubEvents = events.filter(e => club.upcomingEvents.includes(e.id));
  res.json({ ...club, events: clubEvents });
});

app.post('/api/clubs/:id/join', (req, res) => {
  const club = clubs.find(c => c.id === req.params.id);
  if (!club) return res.status(404).json({ error: 'Club not found' });
  const name = req.body.name || 'Student';
  res.json({ message: `${name} joined ${club.name}`, club: club.name, name });
});

app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/announcements', (req, res) => {
  res.json(announcements);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email and message are required' });
  }
  res.json({ message: 'Message received' });
});

if (require.main === module) {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => console.log(`API running at http://localhost:${PORT}`));
}

module.exports = app;