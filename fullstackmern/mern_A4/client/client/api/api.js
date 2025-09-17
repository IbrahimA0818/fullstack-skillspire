import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080'
})

export const getAppointments = () => api.get('/appointments')

export const addAppointments = (appointment) => api.post('/appointments', appointment)

export const deleteAppointments = (id) => api.delete(`/appointments/${id}`)