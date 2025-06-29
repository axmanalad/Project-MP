import { useState, useEffect, useCallback, useMemo } from "react";
import type { Game } from "../types";
import { GameContext } from "./GameContext";
import type { GameContextType } from "../types/game";

interface GameProviderProps {
  children: React.ReactNode;
}

export const GameProvider = ({ children }: GameProviderProps) => {
  const [myGames, setMyGames] = useState<Game[]>([]);

  useEffect(() => {
    // Fetch games from local storage
    const storedGames = localStorage.getItem('myGames');
    if (storedGames)
      setMyGames(JSON.parse(storedGames) as Game[]);
  }, []);

  useEffect(() => {
    // Saves myGames to local storage whenever it changes
    localStorage.setItem('myGames', JSON.stringify(myGames));
  }, [myGames]);

  // Add a game to myGames
  const addToMyGames = useCallback((game: Game) => {
    setMyGames(prev => [...prev, game]);
  }, []);

  // Remove a game from myGames by its ID
  const removeFromMyGames = useCallback((gameId: Game["id"]) => {
    setMyGames(prev => prev.filter(game => game.id !== gameId));
  }, []);

  // Check if a game is in myGames
  const isMyGame = useCallback((gameId: Game["id"]) => {
    return myGames.some(game => game.id === gameId);
  }, [myGames]);
  
  // Memoize the context value to prevent unnecessary re-renders
  const contextValue: GameContextType = useMemo(() => ({
    myGames, addToMyGames, removeFromMyGames, isMyGame
  }), [myGames, addToMyGames, removeFromMyGames, isMyGame]);

  return (
    <GameContext value={contextValue}>
      {children}
    </GameContext>
  );
};