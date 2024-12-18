import express from 'express';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
import adoptionsRouter from './routes/adoption.router.js';
import sessionsRouter from './routes/sessions.router.js';
import mocksRouter from './routes/mocks.router.js';
import setupSwagger from './utils/swagger.js';

import { env, loadEnvFile } from "node:process";

loadEnvFile("./.env");
console.log(env.NODE_ENV);

const app = express();

const PORT = process.env.PORT || 8080;
const connection = mongoose.connect(env.MONGO_URL);

connection.then(() => console.log('Connected to MongoDB'));

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
