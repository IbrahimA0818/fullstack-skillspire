const GetAllPlaylists = async (request,response)=>{
    let playlists = await playlist.find()

    response.send(playlists)
}

const GetPlaylistById = (request,response)=>{
    playlist.findById(request.params.id)
        .then((playlist) =>{
            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

const UpdatePlaylist = (request,response)=>{
    playlist.findByIdAndUpdate(request.params.id, request.body, { new:true })
        .then((playlist)=>{
            console.log("The playlist was updated")

            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

const DeletePlaylist = (request,response)=>{
    playlist.findByIdAndDelete(request.params.id)
        .then((playlist)=>{
            console.log("playlist was deleted")

            response.send("The playlist was deleted.")
        })
        .catch((err) => response.send(err))
}

const CreatePlaylist =  (request,response)=>{
    let newplaylist = new playlist( request.body )

    newplaylist.save()
        .then((playlist) => {
            console.log("The playlist was saved successfully")
            response.send(playlist)
        })
        .catch( (err) => console.log(err) )
}

const GetAllSongs =  (request, response)=>{
    playlist.findById(request.params.id)
        .then ((playlist)=>{
            response.send(playlist.songs)
        })
}

const AddSongs = (request, response)=>{
    playlist.findById(request.params.id)
        .then(async(playlist)=>{
            playlist.songs.push(request.body)

            await playlist.save()

            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

const DeleteSong = (request, response)=>{
    playlist.findById(request.params.id)
        .then(async(playlist)=>{
            if (!playlist) {
                return response.status(404).send("Playlist not found");
            }
            
            playlist.songs = playlist.songs.filter((song) => song._id.toString() !== request.params.songId)

            await playlist.save()

            response.send(playlist)
        })
        .catch((err) => response.send(err))
}

module.exports = { 
    GetAllPlaylists, 
    GetPlaylistById, 
    UpdatePlaylist, 
    DeletePlaylist, 
    CreatePlaylist, 
    GetAllSongs, 
    AddSongs, 
    DeleteSong}