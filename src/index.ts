import express, { Request, Response } from 'express';
import userRoutes from './routes/userRoutes';
import { loggerMiddleware } from './middleware/loggerMiddleware';


const app = express();
const port:Number = 3000;

app.use(express.json());
app.use(loggerMiddleware)

// Route handling
app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});