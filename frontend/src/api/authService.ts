import axios from './axiosInstance';

type UserData = {
  id: string;
  email: string;
  username: string;
};

type AuthResponse = {
  success: boolean;
  data: {
    token: string;
    user: UserData;
    message?: string;
  }
};

type UserGameIdResponse = {
  success: boolean;
  data: {
    userGameId: string;
  };
};

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

// Login
export const login = async (email: string, password: string) => {
  const response = await axios.post<AuthResponse>('/api/auth/login', { email, password });
  if (response.data.success) {
    localStorage.setItem(TOKEN_KEY, response.data.data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(response.data.data.user));
  }
  return response.data;
};

// Register
export const register = async (email: string, username: string, password: string) => {
  const response = await axios.post<AuthResponse>('/api/auth/register', { email, username, password });
  if (response.data.success) {
    localStorage.setItem(TOKEN_KEY, response.data.data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(response.data.data.user));
  }
  console.log(response);
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
  return userStr ? JSON.parse(userStr) as UserData : null;
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
  const response = await axios.get<UserGameIdResponse>(`/api/games/${gameName}/user-game-id`);
  return response.data.success ? response.data.data.userGameId : null;
}
