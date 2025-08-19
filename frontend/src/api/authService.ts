import axios from './axiosInstance';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

// Login
export const login = async (email: string, password: string) => {
  const response = await axios.post('/api/auth/login', { email, password });
  if (response.data.success) {
    localStorage.setItem(TOKEN_KEY, response.data.data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(response.data.data.user));
  }
  return response.data;
};

// Register
export const register = async (email: string, username: string, password: string) => {
  const response = await axios.post('/api/auth/register', { email, username, password });
  if (response.data.success) {
    localStorage.setItem(TOKEN_KEY, response.data.data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(response.data.data.user));
  }
  return response.data;
};

// Logout
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

// Get current user
export const getCurrentUser = () => {
  const userStr = localStorage.getItem(USER_KEY);
  return userStr ? JSON.parse(userStr) : null;
}

// Get token
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
}

// Check user authentication
export const isAuthenticated = () => {
  return !!getToken();
};

// Get userGameId for a specific game
export const getUserGameId = async (gameName: string) => {
  const response = await axios.get(`/api/games/${gameName}/user-game-id`);
  return response.data.success ? response.data.data.userGameId : null;
}

export const getGameIdByUGID = async (userGameId: string) => {
  const response = await axios.get(`/api/games/${userGameId}/game-id`);
  return response.data.success ? response.data.data.gameId : null;
}

export const getBannerId = async (gameId: string, banner: string) => {
  const response = await axios.get(`/api/games/${gameId}/${banner.toLowerCase()}`)
  return response.data.success ? response.data.data.bannerId: null;
}