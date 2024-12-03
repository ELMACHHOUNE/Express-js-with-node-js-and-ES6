import express from 'express';
import { workingHoursMiddleware } from './middleware.js';
import path from 'path';

export const router = express.Router();

// Apply the working hours middleware to all routes
router.use(workingHoursMiddleware);

// Route for Home Page
router.get('/', (req, res) => {
  res.sendFile(path.resolve('./public/index.html'));
});

// Route for Our Services Page
router.get('/services', (req, res) => {
  res.sendFile(path.resolve('./public/services.html'));
});

// Route for Contact Us Page
router.get('/contact', (req, res) => {
  res.sendFile(path.resolve('./public/contact.html'));
});
