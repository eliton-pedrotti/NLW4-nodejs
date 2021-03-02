import 'reflect-metadata';
import "express-async-errors";
import express from 'express';
import './database';
import router from './routes';
import error from './middlewares/Error';

const app = express();

app.use(express.json());
app.use(router);
app.use(error);


export default app;