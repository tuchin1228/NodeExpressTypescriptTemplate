import { Request, Response } from 'express';

export const getUser = (req: Request, res: Response) => {
  const randomNumber: Number = Math.floor(Math.random() * 100);
  res.status(200).json({ message: 'Get user ' + randomNumber });
};

export const createUser = (req: Request, res: Response) => {
  res.status(200).json({ message: 'Create user' });
};