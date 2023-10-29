import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.listen(3000, () => {
  console.log('server is running on port 3000');
});

app.use('/api/user', userRouter);
