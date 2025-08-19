import express from "express";
import dotenv from "dotenv"
import { registerMiddleware } from './middleware';
import routes from "./routes";

dotenv.config();

const app = express();

// Middleware
registerMiddleware(app);

// Routes
app.use("/api", routes);

// Health Check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  console.log(`Health check: http://localhost:${process.env.PORT}/health`);
});