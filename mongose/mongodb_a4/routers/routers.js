const express = require("express")
const router = express.Router()
const { GetAllPlaylists, GetPlaylistById, UpdatePlaylist, DeletePlaylist, CreatePlaylist, GetAllSongs, AddSongs, DeleteSong } = require("../controllers/playlistController");

app.get("/playlists", GetAllPlaylists)

app.get("/playlists/:id", GetPlaylistById)

app.put("/playlists/:id", UpdatePlaylist)

app.delete("/playlists/:id",DeletePlaylist)

app.post("/playlists", CreatePlaylist)

app.get("/playlists/:id/songs", GetAllSongs)

app.post("/playlists/:id/songs", AddSongs)

app.delete('/playlists/:id/songs/:songId', DeleteSong)

module.exports = router