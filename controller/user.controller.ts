import {Request, Response} from 'express';

export const getUsers = (req: Request, res: Response) => {
  

}

export const postUser = (req: Request, res: Response) => {
  const {name, email, password, role} = req.body;
  res.status(200).send({name, email, password, role})
}