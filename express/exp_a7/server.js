const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

let playlists = [
  {
    "id": 1,
    "title": "My Favorites",
    "description": "A collection of my favorite songs",
    "creator": "John Doe",
    "songs": [
      { "id": 1, "title": "Bohemian Rhapsody", "artist": "Queen", "duration": "5:55" },
      { "id": 2, "title": "Hotel California", "artist": "Eagles", "duration": "6:30" }
    ]
  },
  {
    "id": 2,
    "title": "Workout Mix",
    "description": "High energy songs for workouts",
    "creator": "Jane Smith",
    "songs": [
      { "id": 3, "title": "Eye of the Tiger", "artist": "Survivor", "duration": "4:04" }
    ]
  }
];

let nextId = 3;
let nextSongId = 4;

app.get("/playlists", (request, response) => {
  response.send(playlists);
});

app.get("/playlists/:id", (request, response) => {
  const { id } = request.params;
  let playlist = playlists.find((p) => p.id == id);
  response.send(playlist);
});

app.post("/playlists", (request, response) => {
  const data = { ...request.body, id: nextId++, songs: [] };
  playlists.push(data);
  response.send(data);
});

app.put('/playlists/:id', (request, response) => {
  const { id } = request.params;
  let index = playlists.findIndex((playlist) => playlist.id == id);
  playlists[index] = { ...request.body, id: parseInt(id), songs: playlists[index].songs };
  response.send(playlists);
});

app.delete('/playlists/:id', (request, response) => {
  const { id } = request.params;
  playlists = playlists.filter((playlist) => playlist.id != id);
  response.send(playlists);
});

app.get("/playlists/:id/songs", (request, response) => {
  const { id } = request.params;
  let playlist = playlists.find((p) => p.id == id);
  response.send(playlist ? playlist.songs : []);
});

app.post("/playlists/:id/songs", (request, response) => {
  const { id } = request.params;
  let playlist = playlists.find((p) => p.id == id);
  const song = { ...request.body, id: nextSongId++ };
  playlist.songs.push(song);
  response.send(song);
});

app.delete('/playlists/:id/songs/:songId', (request, response) => {
  const { id, songId } = request.params;
  let playlist = playlists.find((p) => p.id == id);
  playlist.songs = playlist.songs.filter((song) => song.id != songId);
  response.send(playlist.songs);
});

const port = 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});