import { Request, Response, NextFunction } from "express";
import { AuthService } from "src/services/auth.service";

declare module "express-serve-static-core" {
  interface Request {
    user?: { id: string };
  }
}

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.slice(7); // Remove "Bearer " prefix

  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ success: false, message: 'Authentication required'});
  }

  const decoded = AuthService.validateToken(token);
  if (!decoded) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  req.user = { id: decoded.userId };
  next();
}