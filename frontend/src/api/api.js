import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
});

export const createMember = (formData) => api.post('/members', formData);
export const getMembers = () => api.get('/members');
export const getMemberById = (id) => api.get(`/members/${id}`);
