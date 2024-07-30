import express from 'express';
import { VALUE } from '@repo/common/config';
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'hello world ' + VALUE,
  });
});

app.listen(3005, () => {
  console.log('listening on port 3005......');
});
