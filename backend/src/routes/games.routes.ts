import { Router } from "express";
import { getBannerId, getGameIdByUserGameId, getUserGameId } from "../controllers/game.controller";

const router = Router();

router.get("/:game/user-game-id", getUserGameId);
router.get("/:userGameId/game-id", getGameIdByUserGameId);
router.get("/:gameId/:banner", getBannerId);

export default router;