import express from 'express';
import type { Request, Response } from 'express';
import { config } from 'dotenv';

config();
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World,F1 monza today.');
});
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from api hello' });
});
app.listen(port, () => {
  console.log(`app is listening on port ${port}....`);
});
