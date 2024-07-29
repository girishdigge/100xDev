import express from 'express';
import { VALUE, URL } from '@repo/common/config';
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'hello world ' + VALUE + URL,
  });
});

app.listen(3005, () => {
  console.log('listening on port 3005......');
});
