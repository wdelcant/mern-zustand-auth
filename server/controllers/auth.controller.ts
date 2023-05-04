import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const loginHandler = (req: Request, res: Response) => {
  // rqd.body = {email, password}
  // 1. Validate email & password //  validation , express-validator, joi , zod
  // store in database - mongodb, mysql, postgresql, sqlite , redis
  // generate token - jwt, cookie , session

  const token = jwt.sign(
    {
      test: 'test',
    },
    'secret',
    {
      expiresIn: 60 * 60 * 24 * 7,
    }
  );

  return res.json({ token });
};

export const profileHandler = (req: Request, res: Response) => {
  return res.json({
    profile: req.user,
    message: 'You made it to the secure route',
  });
};
