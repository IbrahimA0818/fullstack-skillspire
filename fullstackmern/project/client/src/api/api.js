import axios from 'axios';

// Use environment-based URL - works for both development and production
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
    ? '/api'  // In production, use relative path since frontend and backend are served from same domain
    : 'http://localhost:8080/api', // In development, use localhost with /api prefix
});

export const getAllDonations = () => api.get('/donations');
export const getDonation = (id) => api.get(`/donations/${id}`);
export const addDonation = (donation) => api.post('/donations', donation);
export const deleteDonation = (id) => api.delete(`/donations/${id}`);
export const updateDonation = (id, donation) => api.put(`/donations/${id}`, donation);