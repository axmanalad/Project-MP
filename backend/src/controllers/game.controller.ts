import { Request, Response } from "express";
import { GameService } from "../services/game.service";
import { DebugLog as log } from "src/utils/debugLog";

export const getUserGameId = async (req: Request, res: Response) => {
  try {
    const { game } = req.params;
    const userId = req.user.id; // From auth middleware
    
    if (!userId) {
      return res.status(401).json({ success: false, message: "Authentication required" });
    }
    
    if (!game) {
      return res.status(400).json({ success: false, message: "Game parameter is required" });
    }
    
    // Get game ID from game name
    const gameId = await GameService.getGameIdByName(game);
    if (!gameId) {
      return res.status(404).json({ success: false, message: "Game not found" });
    }
    
    // Get userGameId using userId and gameId
    const userGameId = await GameService.getUserGameId(userId, gameId);
    
    if (!userGameId) {
      return res.status(404).json({ success: false, message: "User game not found" });
    }
    
    res.json({ success: true, data: { userGameId } });
  } catch (err) {
    console.error("Error getting user game ID:", err);
    res.status(500).json({ success: false, message: "Failed to get user game ID" });
  }
};

export const getGameIdByName = async (req: Request, res: Response) => {
  try {
    const { gameName } = req.params;
    
    if (!gameName) {
      return res.status(401).json({ success: false, message: "Game name parameter required" });
    } 
    
    const gameId = await GameService.getGameIdByName(gameName);
    if (!gameId) {
      return res.status(404).json({ success: false, message: "Game not found" });
    }
    
    res.json({ success: true, data: { gameId }});
  } catch (err) {
    console.error("Error getting game ID:", err);
    res.status(500).json({ success: false, message: "Failed to get game ID" });
  }
}

export const getGameIdByUserGameId = async (req: Request, res: Response) => {
  try {
    const { userGameId } = req.params;

    if (!userGameId) {
      return res.status(401).json({ success: false, message: "User game ID parameter required" });
    } 
    
    const gameId = await GameService.getGameIdByUserGameId(userGameId);
    if (!gameId) {
      return res.status(404).json({ success: false, message: "Game not found" });
    }
    
    res.json({ success: true, data: { gameId }});
  } catch (err) {
    console.error("Error getting game ID:", err);
    res.status(500).json({ success: false, message: "Failed to get game ID" });
  }
};

export const getBannerId = async (req: Request, res: Response) => {
  try {
    const { gameId, banner } = req.params;

    if (!gameId) {
      return res.status(401).json({ success: false, message: "Game ID parameter required"});
    }

    if (!banner) {
      return res.status(401).json({ success: false, message: "Banner parameter required"});
    }

    const bannerId = await GameService.getBannerId(gameId, banner.toUpperCase());
    if (!bannerId) {
      return res.status(404).json({ success: false, message: "Banner not found" });
    }
    res.json({ success: true, data: { bannerId }});
  } catch (err) {
    console.error("Error getting banner ID:", err);
    res.status(500).json({ success: false, message: "Failed to get banner ID" });
  }
};

export const getUserGames = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    if (req.user.id !== userId) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    const games = await GameService.getUserGames(userId);
    res.json({ success: true, data: { games } });
  } catch (err) {
    console.error("Error getting user games:", err);
    res.status(500).json({ success: false, message: "Failed to get user" });
  }
};

export const addGameToUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { gameId } = req.body;

    if (req.user.id !== userId) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    if (!gameId) {
      return res.status(400).json({ success: false, message: "Game ID is required" });
    }

    const userGame = await GameService.addGameToUser(userId, gameId);
    if (userGame.message) {
      return res.json({ success: true, message: userGame.message });
    }
    return res.json({ success: true, data: userGame.data });
  } catch (err) {
    console.error("Error adding game to user:", err);
    res.status(500).json({ success: false, message: "Failed to add game to user" });
  }
};

export const removeGameFromUser = async (req: Request, res: Response) => {
  try {
    const { userId, gameId } = req.params;

    if (req.user.id !== userId) {
      return res.status(403).json({ success: false, message: "Access denied" });
    }

    await GameService.removeGameFromUser(userId, gameId);
    res.json({ success: true, message: "Game removed from user collection" });
  } catch (err) {
    console.error("Error removing game from user:", err);
    res.status(500).json({ success: false, message: "Failed to remove game from user" });
  }
};