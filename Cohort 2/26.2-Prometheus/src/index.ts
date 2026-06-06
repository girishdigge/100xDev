import express from 'express';
import client from 'prom-client';
import { requestDuration } from './monitoring/histogram.js';
// import { requestCount } from './monitoring/requestCount.js';
// import { activeUser } from './monitoring/requestGauge.js';

const app = express();

// app.use(requestCount);
// app.use(activeUser);
app.use(requestDuration);
app.get('/user', (req, res) => {
  res.json({
    name: 'Girish',
  });
});

app.post('/user', (req, res) => {
  res.json({
    name: 'Girish',
  });
});

app.get('/metrics', async (req, res) => {
  const metrics = await client.register.metrics();
  res.set('content-type', client.register.contentType);
  res.end(metrics);
});

app.listen(3000, () => console.log('server is listening on port 3000....'));
