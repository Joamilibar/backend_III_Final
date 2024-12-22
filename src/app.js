import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import connectDB from './config/database.js';
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import setupSwagger from './utils/swagger.js';


const app = express();

const PORT = process.env.PORT || 8080;

connectDB();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/sessions', sessionsRouter);
app.use('/api/mock', mocksRouter);

setupSwagger(app);
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
export default app;
