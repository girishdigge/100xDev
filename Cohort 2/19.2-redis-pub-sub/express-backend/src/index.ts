import express from 'express';
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const client = createClient();
client.connect();

app.post('/submit', async (req, res) => {
  const { problemId, userId, code, language } = req.body;
  //push this to db prisma.submission.create()
  try {
    await client.lPush(
      'submission',
      JSON.stringify({ problemId, userId, code, language })
    );
    res.json({
      message: 'Submission Received!',
    });
  } catch (error) {
    console.log(error);
    res.json({
      message: 'Submission is failed :(',
    });
  }
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
