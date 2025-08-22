import axios from './axiosInstance';

export const getUserWishes = async (gameName: string, userGameId: string) => {
  const response = await axios.get(`/api/${gameName}/wishes/${userGameId}`);
  return response.data;
};

export const getUserBannerStats = async (gameName: string, userGameId: string, bannerId: string) => {
  const response = await axios.get(`/api/${gameName}/wishes/${userGameId}/stats?bannerId=${bannerId}`);
  return response.data;
};

export const getCombinedUserWishStats = async (gameName: string, userGameId: string) => {
  const response = await axios.get(`/api/${gameName}/wishes/${userGameId}/stats`);
  return response.data;
};

export const getUserPityStats = async (gameName: string, userGameId: string) => {
  const response = await axios.get(`/api/${gameName}/wishes/${userGameId}/pityStats`);
  return response.data;
}

export const importWishes = async (gameName: string, userGameId: string, importUrl: string) => {
  const response = await axios.post(`/api/${gameName}/wishes/${userGameId}/import`, {
    importUrl: importUrl.trim()
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
    }
  });
  return response.data;
};