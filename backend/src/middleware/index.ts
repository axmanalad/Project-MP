import express from "express";
import { corsMiddleware } from "./cors.middleware";

export const registerMiddleware = (app: express.Application) => {
  app.use(corsMiddleware);
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true }));
};