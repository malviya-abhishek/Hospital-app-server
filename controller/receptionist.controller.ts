import {Request, Response} from 'express';
import { create_confirm_appointment } from '../models';

export const postConfirmAppointment = async (req: Request, res: Response)=>{
  try {
    const result = await create_confirm_appointment({...req.body});
    return res.status(200).send(result.rows[0]);

  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}