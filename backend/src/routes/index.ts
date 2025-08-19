import { Router } from "express";
import wishesRoutes from "./wishes.routes";
import authRoutes from "./auth.routes";
import gameRoutes from "./games.routes";
import { authenticate } from "src/middleware/auth.middleware";

const router = Router();

// Public
router.use('/auth', authRoutes);

// Protected
router.use("/:game/wishes", authenticate, wishesRoutes);
router.use("/games", authenticate, gameRoutes);

export default router;