import { Express, Request, Response } from "express";
import * as userController from '../controller/user.controller';

export const userRoutes = function(app: Express){
  app.get("/users", [userController.getUsers]);
  app.post("/users", [userController.postUser] )
}