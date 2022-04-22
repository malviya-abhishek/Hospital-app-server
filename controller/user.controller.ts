import {Request, Response} from 'express';
import { create_user, get_users, get_user } from '../models';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await get_users();
    return res.status(200).send(result.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}

export const getUser =async (req: Request, res: Response) => {
  try{
    const result = await get_user(req.params.userId);
    if(result.rows.length === 0)
      return res.status(404).send("User does not exist");
    else
      return res.status(200).send(result.rows[0]);
  }
  catch(error){
    console.log(error);
    return res.status(500).send(error);
  }
}


export const postUser = async (req: Request, res: Response) => {
  try {
    const result = await create_user({...req.body});
    return res.status(200).send(result.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error);
  }
}