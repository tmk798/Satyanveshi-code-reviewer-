const express = require('express');
const cors = require('cors');
const aiRoutes = require('../src/routes/ai.routes');

const app = express();

// Allow CORS
app.use(cors()); // 🔥 This line fixes the CORS error

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.use('/ai', aiRoutes);

module.exports = app;
