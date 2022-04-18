import { Express, Request, Response, Router } from "express";
import { userRoutes } from "./user.routes";

export const routesInit = function(app: Express){
  app.get("/healthcheck", (req: Request, res: Response)=>{
    return res.status(200).send("Api working")
  });
  userRoutes(app);
}