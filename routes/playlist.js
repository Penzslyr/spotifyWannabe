import express from 'express';

import {
  addSong,
  getSong,
  getMostPlayed,
} from '../controllers/rest/playlist.js';

// import the router
const router = express.Router();

router.post('/add', addSong);

// The path definition, it will call the controllers/handlers
router.get('/play/:songIndex', getSong);

// Get the list of songs in the playlist sorted by most played
router.get('/', getMostPlayed);

// Export the users router definition path and handler
export default router;
