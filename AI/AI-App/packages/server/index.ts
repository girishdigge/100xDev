import express from 'express';
import { config } from 'dotenv';
import router from './routes';
import cors from 'cors';

config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(router);
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}....`);
});
