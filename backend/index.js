const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const users = [
  { name: 'Alice', email: 'alice@example.com' },
  { name: 'Bob', email: 'bob@example.com' },
  { name: 'Charlie', email: 'charlie@example.com' }
];

// GET /api/users
app.get('/api/users', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
