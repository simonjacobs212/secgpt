const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

app.post('/slack', async (req, res) => {
  try {
    const response = await axios.post(SLACK_WEBHOOK_URL, req.body);
    res.status(response.status).send('Message forwarded to Slack');
  } catch (err) {
    console.error('Slack forwarding failed:', err.message);
    res.status(500).send('Slack post failed');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Slack proxy running on port ${PORT}`);
});