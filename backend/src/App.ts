import express from 'express';
import { errorHandler } from './errors/errorHandler';
import { notFound } from './errors/notFound';
import { userRouter } from './user/user.router';
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

export const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use(notFound);
app.use(errorHandler);
