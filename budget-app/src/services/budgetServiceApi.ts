import axios from 'axios';

class BudgetServiceApi {
  axiosInstance = axios.create({
    baseURL: 'https://budget-server-theta.vercel.app',
  });

  updateTransaction = async (transactionId: string) => {
    try {
      const response = await this.axiosInstance.put(`/api/transaction/:${transactionId}`);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  deleteTransaction = async (transactionId: string) => {
    try {
      const response = await this.axiosInstance.delete(`/api/transaction/${transactionId}`);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  getAllTransactions = async () => {
    try {
      const response = await this.axiosInstance.get(`/api/transaction/transactions`);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  createTransaction = async (payloadTransaction: string) => {
    try {
      const response = await this.axiosInstance.post(`/api/transaction/`, payloadTransaction);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  createUser = async (payloadUser: string) => {
    try {
      const response = await this.axiosInstance.post(`/api/user`, payloadUser);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  getUserById = async (userId: string) => {
    try {
      const response = await this.axiosInstance.get(`/api/user/${userId}`);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  deleteUser = async (userId: string) => {
    try {
      const response = await this.axiosInstance.delete(`/api/user/${userId}`);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  updateUser = async (userId: string, payloadUser: string) => {
    try {
      const response = await this.axiosInstance.put(`/api/user/${userId}`, payloadUser);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };
}

export default new BudgetServiceApi();
