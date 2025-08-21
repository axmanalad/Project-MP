import axios from './axiosInstance';
import type { Game } from '../types';

export const getUserGames = async (userId: string): Promise<Game[]> => {
  const response = await axios.get(`/api/games/user/${userId}`);
  return response.data.data.games;
};

export const addGameToUser = async (userId: string, gameId: string) => {
  console.log('Adding game to user:', userId, gameId);
  const response = await axios.post(`/api/games/user/${userId}`, { gameId });
  return response.data;
};

export const removeGameFromUser = async (userId: string, gameId: string) => {
  const response = await axios.delete(`/api/games/user/${userId}/${gameId}`);
  return response.data;
};