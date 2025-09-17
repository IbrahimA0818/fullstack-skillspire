import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getAppointments = () => api.get('/appointments')

export const addAppointments = (book) => api.post('/appointments', book)

export const deleteAppointments = (id) => api.delete(`/appintmentss/${id}`)
