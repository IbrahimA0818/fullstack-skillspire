import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getPlaylists = () => api.get('/playlists')

export const addPlaylist = (playlist) => api.post('/playlists',playlist)

export const deletePlaylist = (id) => api.delete(`/playlists/${id}`)

export const updatePlaylist = (id, playlist) => api.put(`/playlists/${id}`, playlist)