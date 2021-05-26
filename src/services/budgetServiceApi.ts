import axios from 'axios';

interface Iuser {
  firstName: String;
  lastName: String;
  email: String;
  avatar: String;
  currentBalance: String;
  currentBalanceCurrency: String;
  creditCard: {
    expYear: Number;
    expMonth: Number;
    last4Digits: Number;
  };
}
interface Itransactions {
  paymentType: String;
  paymentMethod: String;
  cancelled: Boolean;
  time: String;
  date: String;
  currency: String;
  category: String;
  company: String;
  amount: String;
  location: {
    country: String;
    city: String;
    street: String;
    lat: Number;
    lng: Number;
  };
}
const baseURl = process.env.REACT_APP_BASE_URL;

class BudgetServiceApi {
  axiosInstance = axios.create({
    baseURL: baseURl,
  });

  updateTransaction = async (transactionId: string, payloadTransaction: Itransactions) => {
    try {
      const response = await this.axiosInstance.put(`/api/transaction/${transactionId}`, payloadTransaction);
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

  createTransaction = async (payloadTransaction: Itransactions) => {
    try {
      const response = await this.axiosInstance.post(`/api/transaction/`, payloadTransaction);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };

  createUser = async (payloadUser: Iuser) => {
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

  updateUser = async (userId: string, payloadUser: Iuser) => {
    try {
      const response = await this.axiosInstance.put(`/api/user/${userId}`, payloadUser);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };
}

export default new BudgetServiceApi();
