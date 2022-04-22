import { Express } from "express";
import * as userController from '../controller/user.controller';

export const userRoutes = function(app: Express){
  app.get("/users", [userController.getUsers]);
  app.get("/users/:userId", [userController.getUser])
  app.post("/users", [userController.postUser]);
}