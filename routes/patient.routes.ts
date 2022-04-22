import { Express } from "express";
import * as patientController from '../controller/patient.controller';

export const patientRoutes = function(app: Express){
  app.post("/new-appointment", [patientController.postNewAppointment]);
}