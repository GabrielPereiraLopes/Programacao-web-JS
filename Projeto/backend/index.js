import express from 'express';
import cors from 'cors';
import session from 'express-session';
import authRoutes from './routes/auth.js';
import eventRoutes from './routes/events.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Rotas de autenticação
app.use('/auth', authRoutes);
// Rotas de eventos
app.use('/events', eventRoutes);

const PORT = 8800;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
