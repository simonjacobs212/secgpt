const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const SLACK_WEBHOOK_URL = process.env.https://hooks.slack.com/services/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;

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