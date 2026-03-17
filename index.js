import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import { seedDatabase } from './seed.js';

import { Analytics } from './models/Analytics.js';
import { Advisory } from './models/Advisory.js';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/smart-traffic';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// --- API Routes ---

app.get('/api/analytics', async (req, res) => {
  try {
    const analytics = await Analytics.find().sort({ timestamp: -1 }).limit(24);
    res.json(analytics.reverse()); // Return oldest to newest for charts
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch analytics' });
  }
});

app.get('/api/advisories', async (req, res) => {
  try {
    const advisories = await Advisory.find({ active: true });
    res.json(advisories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch advisories' });
  }
});

app.post('/api/seed', async (req, res) => {
  await seedDatabase();
  res.json({ message: 'Database seeded' });
});

// --- WebSockets ---
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Smart Traffic Backend running on port ${PORT}`);
});
