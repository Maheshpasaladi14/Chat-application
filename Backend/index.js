import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './Routes/authRoutes.js'
import messageRoutes from './Routes/messageRoutes.js'
import userRoutes from './Routes/userRoutes.js'
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.DB)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err)=>{
    console.log(err);
  })

  app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());
//routing
app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users',userRoutes)


