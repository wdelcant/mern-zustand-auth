import express from 'express';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
app.use(authRoutes);

export default app;

// Path: server\package.jso
