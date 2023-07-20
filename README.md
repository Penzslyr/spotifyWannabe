# spotifyWannabe
spotify wannabe

// get all songs sort by most played
GET localhost:3000/playlist 

// add song 
POST localhost:3000/playlist/add

params raw json example : 
{
  "title": "Song Title 5",
  "artists": ["Artist 5", "Artist 5"],
  "url": "Spotify URL"
}

// play song 
GET localhost:3000/playlist/play/:indexNumber

change :IndexNumber to desire number 
example localhost:3000/playlist/play/0

no support play by input song title , soon

auth : Effendi Prakoso
