const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/v1/user/', userRoutes);

app.listen(3000, () => {
  console.log('listening on 3000.....');
});
