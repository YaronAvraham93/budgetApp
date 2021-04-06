/**
 * @jest-environment node
 */
import BudgetServiceApi from './budgetServiceApi';

describe('testing budget Api', () => {
  it('check user to have necessary properties', async () => {
    const user = await BudgetServiceApi.getUserById('605350f5cc4dcc3d0495bab4');
    expect(user).toHaveProperty('_id');
    expect(user).toHaveProperty('first_name');
    expect(user).toHaveProperty('last_name');
    expect(user).toHaveProperty('email');
  });
  it('checks if the fields in user have been updateds', async () => {
    const updateUser = await BudgetServiceApi.updateUser('6053547c0b425034c006f4c1', {
      first_name: 'Yaron',
      last_name: 'Avraham',
      email: 'tduap0@ifeng@asd.com',
      avatar: 'http://www.avatarpro.biz/avatar?s=200',
      current_balance: '10341.91',
      current_balance_currency: 'IDR',
      credit_card: [
        {
          _id: '605356c70b425034c006f4c3',
          exp_year: 24,
          exp_month: 12,
          last4Digits: 9512,
        },
      ],
    });
    const user = await BudgetServiceApi.getUserById('6053547c0b425034c006f4c1');
    expect(user.first_name).toBe('Yaron');
    expect(user._id).toBe('6053547c0b425034c006f4c1');
  });
  it('Checks if a user has been deleted', async () => {
    const result = await BudgetServiceApi.deleteUser('606c34bd14222800083966a6');

    expect(result).toBe('The user has been deleted');
  });
  it('Checks if a user has been created', async () => {
    const result = await BudgetServiceApi.createUser({
      first_name: 'David',
      last_name: 'Mangisto',
      email: 'yoni@v@gamil.com',
      avatar: 'http://www.avatarpro.biz/avatar?s=200',
      current_balance: '10341.91',
      current_balance_currency: 'IDR',
      credit_card: {
        exp_year: 22,
        exp_month: 11,
        last4Digits: 2512,
      },
    });
    console.log(result);
    expect(result).toHaveProperty('first_name');
    expect(result).toHaveProperty('last_name');
  });
  it('check transaction to have necessary properties', async () => {
    const transaction = await BudgetServiceApi.getAllTransactions('606b21b6c88c6d0005fe8f97');
    console.log(transaction);
    expect(transaction[0]).toHaveProperty('paymentType');
  });
  it('Checks if a transaction has been deleted', async () => {
    const result = await BudgetServiceApi.deleteTransaction('606b2213c88c6d0005fe8f98');
    expect(result).toBe('The transaction has been deleted');
  });
  it('checks if the fields in transaction have been updateds', async () => {
    const updateTransaction = await BudgetServiceApi.updateTransaction('606c3b3c29aded0008f97c7f', {
      paymentType: 'Expenses',
      paymentMethod: 'credit card',
      cancelled: false,
      time: '8:09 PM',
      date: '',
      currency: 'CNY',
      category: 'Grocery',
      company: 'Browsecat',
      amount: '710.32',
      location: {
        country: 'China',
        city: 'Lidian',
        street: '9412 Northview Avenue',
        lat: 32.272766,
        lng: 119.579153,
      },
    });
    console.log(updateTransaction);
    expect(updateTransaction).toBe('The transaction has been updated');
  });
  it('Checks if a transaction has been created', async () => {
    const result = await BudgetServiceApi.createTransaction({
      paymentType: 'Expenses',
      paymentMethod: 'credit card',
      cancelled: true,
      time: '8:09 PM',
      date: '12/7/2020',
      currency: 'CNY',
      category: 'Grocery',
      company: 'Browsecat',
      amount: '710.32',
      location: {
        country: 'China',
        city: 'Lidian',
        street: '9412 Northview Avenue',
        lat: 32.272766,
        lng: 119.579153,
      },
    });
    console.log(result);
    expect(result).toBe('transaction created!');
  });
});
