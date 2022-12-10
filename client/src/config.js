export const APP_NAME = "Placeholder";

const API_URL = "http://localhost:5000";

// Authentication API
export const loginAuthApi = `${API_URL}/login`;
export const registerAuthApi = `${API_URL}/register`;
export const logoutAuthApi = `${API_URL}/logout`;
export const forgotPasswordApi = `${API_URL}/forgot-password`;
export const resetPasswordApi = `${API_URL}/reset-password`;
export const authApi = token => `${API_URL}/auth/${token}`;

// Services API
export const getServicesApi = `${API_URL}/services`;
export const filterServicesByCategoryApi = category => `${API_URL}/services/${category}`;
export const searchServicesByServiceApi = `${API_URL}/services/search`;


// Orders API
export const addNewOrdersApi = `${API_URL}/dashboard/book-order`;
export const filterOrdersByStatusApi = category => `${API_URL}/dashboard/${category}`;
export const getAllOrdersApi = userID => `${API_URL}/dashboard/${userID}`;

// Add funds API
export const addFundsApi = `${API_URL}/add-funds`;

// Compose Mail API
export const composeMailApi = "";

// Encryption key
export const encryptionKey = "8enc2_q813o6_8enc2q813o6"

// Telegram Bot Redirect Link
export const telegram_redirect_bot_link = "https://t.me/frozymelon";

// Telegram Services Membership Group Link 
export const telegram_membership_link = "https://t.me";

// Telegram Payment Support Group Link 
export const telegram_payment_support_link = "https://t.me/payment-support";

// Payment Links
export const coinbasePaymentLink = "https://coinbase/btc";
export const binancePaymentLink = "https://binance/btc";