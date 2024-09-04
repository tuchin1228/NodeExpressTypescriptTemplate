import { Request, Response, NextFunction } from 'express';


// Logger Middleware Function
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  
  const start = Date.now();
  const { method, url } = req;

  res.on('finish', () => {
    const duration = Date.now() - start; 
    const status = res.statusCode; 

    console.log(`[${new Date().toISOString()}] ${method} ${url} ${status} - ${duration}ms`);
  });

  next();
};