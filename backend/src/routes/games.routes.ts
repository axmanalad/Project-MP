import { Router } from "express";
import { addGameToUser, getBannerId, getGameIdByName, getGameIdByUserGameId, getUserGameId } from "../controllers/game.controller";

const router = Router();

// User Game Collection
// router.get("/") // Gets available games (existing)
// router.get("/user/:userId"); // Gets user games
router.post("/user/:userId", addGameToUser);
// router.delete("/user/:userId/:gameId") // Removes the user game


// GET Requests
router.get("/:game/user-game-id", getUserGameId);
router.get("/:gameName/game-id-name", getGameIdByName);
router.get("/:userGameId/game-id-ugid", getGameIdByUserGameId);
router.get("/:gameId/:banner", getBannerId);

export default router;