import axios from 'axios';

export default class budgetServiceApi {
  axiosInstance = axios.create({
    baseURL: 'https://budget-server-theta.vercel.app',
  });

  updateTransaction = async (transactionId: string) => {
    try {
      await this.axiosInstance.put(`/api/transaction/:${transactionId}`);
      return { massage: 'The operation was successful' };
    } catch (e) {
      return e.massage;
    }
  };

  deleteTransaction = async (transactionId: string) => {
    try {
      await this.axiosInstance.delete(`/api/transaction/:${transactionId}`);
      return { massage: 'The operation was successful' };
    } catch (e) {
      return e.massage;
    }
  };

  getAllTransactions = async () => {
    try {
      const result = await this.axiosInstance.get(`/api/transaction/transactions`);
      return result;
    } catch (e) {
      return e.massage;
    }
  };

  createTransaction = async (data: string) => {
    try {
      await this.axiosInstance.post(`/api/transaction/${data}`);
      return { massage: 'The operation was successful' };
    } catch (e) {
      return e.massage;
    }
  };

  createUser = async (data: string) => {
    try {
      await this.axiosInstance.post(`/api/user/${data}`);
      return { massage: 'The operation was successful' };
    } catch (e) {
      return e.massage;
    }
  };

  getUserById = async (userId: string) => {
    try {
      await this.axiosInstance.get(`/api/user/:${userId}`);
      return { massage: 'The operation was successful' };
    } catch (e) {
      return e.massage();
    }
  };

  deleteUser = async (userId: string) => {
    try {
      await this.axiosInstance.delete(`/api/user/:${userId}`);
      return { massage: 'The operation was successful' };
    } catch (e) {
      return e.massage;
    }
  };

  updateUser = async (userId: string) => {
    try {
      await this.axiosInstance.put(`/api/user/:${userId}`);
      return { massage: 'The operation was successful' };
    } catch (e) {
      return e.massage;
    }
  };
}
