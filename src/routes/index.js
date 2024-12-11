const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to API Express with Serverless!');
});

router.get('/health', (req, res) => {
  res.send(`API is running in ${process.env.NODE_ENV} mode`);
});

module.exports = router;
