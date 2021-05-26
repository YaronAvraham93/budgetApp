import axios from 'axios';

const baseURl = 'https://v6.exchangerate-api.com/v6/84ae236d3163d53abc450a62/latest/';
class CurrencyService {
  axiosInstance = axios.create({
    baseURL: baseURl,
  });

  getCurrencyrates = async (currency: string) => {
    try {
      const response = await this.axiosInstance.get(`${currency}`);
      return response.data;
    } catch (e) {
      return e.massage;
    }
  };
}

export default new CurrencyService();
