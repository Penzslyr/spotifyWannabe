import express from 'express';

import bodyParser from 'body-parser';
import songRouter from '../routes/playlist.js'

export function startRest() {
  const app = express();
  app.use(bodyParser.json());

  app.use('/playlist', songRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: 'not found!',
    });
  });

  // Start the server
  app.listen(3000, () => {
    console.log(`Server running on port 3000`);
  });
}
