import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

export const getAllDonations = () => api.get('/donations');
export const getDonation = (id) => api.get(`/donations/${id}`);
export const addDonation = (donation) => api.post('/donations', donation);
export const deleteDonation = (id) => api.delete(`/donations/${id}`);
export const updateDonation = (id, donation) => api.put(`/donations/${id}`, donation);