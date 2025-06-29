import { use } from "react";
import { GameContext } from "../contexts/GameContext";

export const useGameContext = () => use(GameContext);
