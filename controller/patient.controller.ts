import {Request, Response} from 'express';
import { create_new_appointment } from '../models';

export const postNewAppointment = async (req: Request, res: Response)=>{
  try {
    const result = await create_new_appointment({...req.body});
    return res.status(200).send(result.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);

  }
}