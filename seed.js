import mongoose from 'mongoose';
import { Analytics } from './models/Analytics.js';
import { Advisory } from './models/Advisory.js';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/smart-traffic';

const mockAnalytics = Array.from({ length: 24 }).map((_, i) => ({
  timestamp: new Date(Date.now() - (23 - i) * 60 * 60 * 1000), // Last 24 hours
  totalVehicles: Math.floor(Math.random() * 500) + 100,
  averageWaitTimeSeconds: Math.floor(Math.random() * 120) + 10,
  predictedCongestion: ['Low', 'Moderate', 'Heavy'][Math.floor(Math.random() * 3)]
}));

const mockAdvisories = [
  {
    id: 'adv-1',
    type: 'Alert',
    title: 'Heavy Traffic Detected',
    message: 'Accident reported near Downtown Main St. Expect delays of 20 mins.',
    affectedArea: 'Downtown Main St & 1st Ave',
    active: true
  },
  {
    id: 'adv-2',
    type: 'Suggestion',
    title: 'Shortcut Recommended',
    message: 'Take 2nd Ave instead of Main St to save 15 minutes.',
    affectedArea: 'Main St',
    suggestedShortcut: '2nd Ave',
    timeSavedMinutes: 15,
    active: true
  }
];

export async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB for seeding');


    await Analytics.deleteMany({});
    await Advisory.deleteMany({});

    await Analytics.insertMany(mockAnalytics);
    await Advisory.insertMany(mockAdvisories);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  }
}
