import playlist from '../../repositories/songs/json/songs.json' assert { type: 'json' };

// Initialize an empty playlist

// add song to the playlist
export const addSong = (req, res) => {
  const { title, artists, url } = req.body;

  // Create a new song object with title, artists, url, and playCount
  const song = {
    title,
    artists,
    url,
    playCount: 0,
  };

  // Add the song to the playlist
  playlist.push(song);

  return res.status(200).json({ message: 'Song added to the playlist' });
};

// Play a song from the playlist
export const getSong = (req, res) => {
  const { songIndex } = req.params;

  if (songIndex >= 0 && songIndex < playlist.length) {
    const song = playlist[songIndex];
    song.playCount++; // Increment the play count
    return res.status(200).json({ message: 'Now playing', song });
  } else {
    return res.status(404).json({ message: 'Song not found' });
  }
};

export const getMostPlayed = (req, res) => {
  const sortedPlaylist = [...playlist].sort(
    (a, b) => b.playCount - a.playCount
  );
  return res.status(200).json({ playlist: sortedPlaylist });
};
