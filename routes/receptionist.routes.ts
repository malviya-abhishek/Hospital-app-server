import { Express } from "express";
// import * as userController from '../controller/user.controller';
import * as receptionistController from '../controller/receptionist.controller';

export const receptionistRoutes = function(app: Express){
  app.post("/confirm-appointment", [receptionistController.postConfirmAppointment]);
}