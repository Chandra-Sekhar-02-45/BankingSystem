import API from './api';

// Transaction Controller Endpoints
export const deposit = async (accountId, amount) => {
  const response = await API.post("/transactions/deposit", { accountId, amount });
  return response.data;
};

export const withdraw = async (accountId, amount) => {
  const response = await API.post("/transactions/withdraw", { accountId, amount });
  return response.data;
};

export const transfer = async (fromAccountId, toAccountId, amount, fee, tax) => {
  const response = await API.post("/transactions/transfer", { fromAccountId, toAccountId, amount, fee, tax });
  return response.data;
};

export const cardTransfer = async (senderCardNumber, receiverCardNumber, amount, senderCvv, senderExpiryDate, pin) => {
  const response = await API.post("/transactions/card-transfer", { senderCardNumber, receiverCardNumber, amount, senderCvv, senderExpiryDate, pin });
  return response.data;
};

export const getCards = async () => {
  const response = await API.get('/cards');
  return response.data;
};

export const getAllCards = async () => {
  const response = await API.get('/cards/all');
  return response.data;
};

export const getHistory = async (accountId) => {
  const response = await API.get(`/transactions/account/${accountId}/history`);
  return response.data;
};

// Account Controller Endpoints
export const getAccounts = async () => {
  const response = await API.get("/accounts");
  return response.data;
};

// User Controller Endpoints
export const updateUser = async (userId, userData) => {
  const response = await API.put(`/users/${userId}`, userData);
  return response.data;
};

// Auth Controller Endpoints
export const login = async (email, password) => {
  const response = await API.post("/auth/login", { email, password });
  return response.data;
};

export const register = async (fullname, email, password, username, accountNumber, ifsc) => {
  const response = await API.post("/auth/register", { fullname, email, password, username, accountNumber, ifsc });
  return response.data;
};

export const getUserLoans = async (userId) => {
  const response = await API.get(`/loans/user/${userId}`);
  return response.data;
};

export const payLoan = async (userId, accountId, amount, loanType) => {
  const response = await API.post("/loans/pay", { userId, accountId, amount, loanType });
  return response.data;
};

export const changePassword = async (userId, data) => {
  const response = await API.put(`/users/${userId}/password`, data);
  return response.data;
};
