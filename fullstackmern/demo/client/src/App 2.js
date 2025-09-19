import './App.css';
import { getPlaylists, addPlaylist, deletePlaylist, updatePlaylist } from './api/api'
import{ useState, useEffect } from 'react'


function App() {
  const [playlists, setPlaylists] = useState([])

  useEffect(()=>{
    const getAllPlaylists = async () =>{
      const response = await getPlaylists()

      // console.log("Responses from express ", response.data )

      setPlaylists(response.data)
    }

    getAllPlaylists()
  })

  const handleSubmit = async (e)=>{
    e.preventDefault()

    let title =  e.target['title'].value
    let description = e.target['description'].value
    let creator = e.target['creator'].value

    const response = await addPlaylist({title:title,description:description, creator:creator})
  
    console.log("Playlist added, ", response.data)
  }

  const deleteSelectedPlaylist = async (id)=>{
    const response = await deletePlaylist(id)

    console.log("Deleted playlist, ", response.data)
  }
  const updateSelectedPlaylist = async (id)=>{
    const newTitle = prompt("enter the updated title")
    const newDesc = prompt("enter new description")
    const newCreator = prompt("enter new creator")

    if (newTitle && newDesc && newCreator){
      const response = await updatePlaylist(id,{
        title: newTitle,
        description: newDesc,
        creator: newCreator
      })
      console.log("updated playlist", response.data)
    }

  }

  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
          <input type="text" placeholder="title" name="title"/>
          <input type="text" placeholder="description" name="description"/>
          <input type="text" placeholder="creator" name="creator"/>

          <button type="submit">Add Playlist</button>
        </form> 

        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Creator</th>
                <th>Action</th>
            </tr>

            {
                playlists.map(playlist=>(
                    <tr key={playlist._id}>
                        <td>{playlist.title}</td>
                        <td>{playlist.description}</td>
                        <td>{playlist.creator}</td>
                        <td>
                          <button onClick={()=>{deleteSelectedPlaylist(playlist._id)}}>Delete</button>
                        </td>
                        <td>
                          <button onClick={()=>{updateSelectedPlaylist(playlist._id)}}>Update</button>
                        </td>
                    </tr>
                ))
            }
        </table>
    </div>
  );
}

export default App;