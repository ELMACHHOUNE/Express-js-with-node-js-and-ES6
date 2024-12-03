import express from 'express';
import { router } from './src/routes.js';
import path from 'path';

const app = express();

// Middleware for serving static files
app.use(express.static(path.resolve('./public')));

// Use routes
app.use('/', router);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
