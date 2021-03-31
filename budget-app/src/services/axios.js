import axios from 'axios';
const api = axios.create({
  baseURL: 'https://budget-server-theta.vercel.app',
});
export const createTransaction = () => api.post(`/api/transaction/${param}`);
export const getAllTransactions = () => api.get('/api/transaction/transactions');
export const deleteTransaction = (id) => api.delete(`/api/transaction/:${id}`);
export const updateTransaction = (id) => api.put(`/api/transaction/:${id}`);

export const createUser = () => api.post(`/api/user/${param}`);
export const getUserById = (id) => api.get(`/api/user/:${id}`);
export const deleteUser = (id) => api.delete(`/api/user/:${id}`);
export const updateUser = (id) => api.put(`/api/user/:${id}`);

const apis = {
  createTransaction,
  getAllTransactions,
  deleteTransaction,
  updateTransaction,
  createUser,
  getUserById,
  deleteUser,
  updateUser,
};

export default apis;
