export const APP_NAME = "Placeholder";

const API_URL = "http://localhost:5000";

// API's
export const loginAuthApi = `${API_URL}/login`;
export const registerAuthApi = `${API_URL}/register`;
export const composeMailApi = "";
export const getServicesApi = `${API_URL}/services`;
export const filterServicesByCategoryApi = category => `${API_URL}/services/${category}`;
export const addNewOrdersApi = `${API_URL}/dashboard/book-order`;
export const filterOrdersByStatusApi = category => `${API_URL}/dashboard/${category}`;
export const getAllOrdersApi = `${API_URL}/dashboard`;
export const addFundsApi = `${API_URL}/add-funds`;

// Telegram Bot Redirect Link
export const telegram_redirect_bot_link = "https://t.me/frozymelon";

// Telegram Services Membership Group Link 
export const telegram_membership_link = "https://t.me";

// Telegram Payment Support Group Link 
export const telegram_payment_support_link = "https://t.me/payment-support";

// Payment Links
export const coinbasePaymentLink = "https://coinbase/btc";
export const binancePaymentLink = "https://binance/btc";