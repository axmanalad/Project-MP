import { PrismaClient } from '@prisma';

const prisma = new PrismaClient();

/**
 * Service for managing games.
 */
export class GameService {
  /**
   * Get the ID of a game by its name.
   * @param gameName The name of the game.
   * @returns The ID of the game, or an empty string if not found.
   */
  static async getGameIdByName(gameName: string): Promise<string> {
    const game = await prisma.game.findUnique({
      where: { name: gameName }
    });
    return game ? game.id : '';
  }

  /**
   * Get the ID of a game by the user game ID.
   * @param userGameId The user game ID.
   * @returns The ID of the game, or an empty string if not found.
   */
  static async getGameIdByUserGameId(userGameId: string): Promise<string> {
    const game = await prisma.userGame.findFirst({
      where: { id: userGameId }
    });
    return game ? game.gameId : '';
  }

  /**
   * Get the ID of a user game record.
   * @param userId The ID of the user.
   * @param gameId The ID of the game.
   * @returns The ID of the user game record, or an empty string if not found.
   */
  static async getUserGameId(userId: string, gameId: string): Promise<string> {
    const userGame = await prisma.userGame.findUnique({
      where: { userId_gameId: { userId, gameId } }
    });
    return userGame ? userGame.id : ''
  }

  /**
   * Get the ID of a banner by its game ID and gacha type.
   * @param gameId The ID of the game.
   * @param gachaType The type of gacha.
   * @returns The ID of the banner, or an empty string if not found.
   */
  static async getBannerId(gameId: string, type: string): Promise<string> {
    const banner = await prisma.banner.findUnique({
      where: { gameId_type: { gameId, type } }
    });
    return banner ? banner.id : '';
  }
}