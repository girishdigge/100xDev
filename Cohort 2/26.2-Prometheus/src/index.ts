import express from 'express';
const app = express();

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

app.listen(3000, () => console.log('server is listening on port 3000....'));
