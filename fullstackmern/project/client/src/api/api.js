import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api'
    : 'http://localhost:8080/api',
});


export const getAllDonations = () => api.get('/donations');
export const getDonation = (id) => api.get(`/donations/${id}`);
export const addDonation = (donation) => api.post('/donations', donation);
export const deleteDonation = (id) => api.delete(`/donations/${id}`);
export const updateDonation = (id, donation) => api.put(`/donations/${id}`, donation);
export const getAvailableDonations = () => api.get('/donations/available');
export const claimDonation = (id, recipientEmail) => api.put(`/donations/${id}/claim`, { recipientEmail });
export const unclaimDonation = (id) => api.put(`/donations/${id}/unclaim`);