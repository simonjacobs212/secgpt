const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

const SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

app.post('/slack', async (req, res) => {
  try {
    const response = await axios.post(SLACK_WEBHOOK_URL, req.body);
    res.status(response.status).send('OK');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(3000, () => console.log('Slack proxy running on :3000'));
