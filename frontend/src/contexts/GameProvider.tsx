import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import type { Game } from "../types";
import { GameContext } from "./GameContext";
import type { GameContextType } from "../types/game";
import { useAuth } from "./AuthContext";
import { getGameIdByName } from "../api/gameService";
import { addGameToUser } from "../api/gameService";

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [myGames, setMyGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const { user, isAuthenticated } = useAuth();
  const isInitialized = useRef(false);

  useEffect(() => {
    // Fetch games from local storage
    const loadGames = () => {
      if (isAuthenticated && user) {
        // Here this would typically fetch the user's games from an API
        // For now, we'll just load from local storage for development purposes
        const storedGames = localStorage.getItem('myGames');
        if (storedGames) {
          setMyGames(JSON.parse(storedGames) as Game[]);
        }
        isInitialized.current = true;
      }
    };
    loadGames();
  }, [isAuthenticated, user]);

  useEffect(() => {
    // Saves myGames to local storage whenever it changes
    if (isInitialized.current) {
      localStorage.setItem('myGames', JSON.stringify(myGames));
    }
  }, [myGames]);

  // Add a game to myGames
  const addToMyGames = useCallback(async (game: Game) => {
    try {
      setLoading(true);
      if (isAuthenticated && user) {
        const gameId = await getGameIdByName(game.name);
        await addGameToUser(user.id, gameId);
      }
    } catch (err) {
      console.error("Failed to add game:", err);
      throw err;
    } finally {
      setMyGames(prev => [...prev, game]);
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  // Remove a game from myGames by its local ID for now
  const removeFromMyGames = useCallback((gameId: Game["id"]) => {
    try {
      setLoading(true);
      if (isAuthenticated && user) {
        // Here you would typically call an API to remove the game from the user's collection
        // For now, we'll just remove it from local state
      }
      setMyGames(prev => prev.filter(game => game.id !== gameId));
    } catch (err) {
      console.error("Failed to remove game:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [isAuthenticated, user]);

  // Check if a game is in myGames
  const isMyGame = useCallback((gameId: Game["id"]) => {
    return myGames.some(game => game.id === gameId);
  }, [myGames]);
  
  // Memoize the context value to prevent unnecessary re-renders
  const contextValue: GameContextType = useMemo(() => ({
    myGames, addToMyGames, removeFromMyGames, isMyGame, loading
  }), [myGames, addToMyGames, removeFromMyGames, isMyGame, loading]);

  return (
    <GameContext value={contextValue}>
      {children}
    </GameContext>
  );
};