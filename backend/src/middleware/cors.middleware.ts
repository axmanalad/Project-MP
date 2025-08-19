import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

export const corsMiddleware = cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
});