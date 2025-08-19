import { Request, Response } from "express";
import { GameService } from "../services/game.service";

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
}