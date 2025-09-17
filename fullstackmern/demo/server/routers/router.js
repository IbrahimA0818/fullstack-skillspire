const express = require("express")
const router = express.Router()

const { 
    GetAllPlaylists, 
    GetPlaylistById, 
    UpdatePlaylist, 
    DeletePlaylist, 
    CreatePlaylist, 
    GetAllSongs, 
    AddSongs, 
    DeleteSong 
} = require("../controllers/Playlistcontroller")

// Use router instead of app
router.get("/playlists", GetAllPlaylists)
router.get("/playlists/:id", GetPlaylistById)
router.put("/playlists/:id", UpdatePlaylist)
router.delete("/playlists/:id", DeletePlaylist)
router.post("/playlists", CreatePlaylist)
router.get("/playlists/:id/songs", GetAllSongs)
router.post("/playlists/:id/songs", AddSongs)
router.delete("/playlists/:id/songs/:songId", DeleteSong)

module.exports = router
