import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from './routes/index';
import Users from './routes/Users'
import mongoose from 'mongoose'
import items from './routes/items'

const app = express();

mongoose.connect('mongodb+srv://ash:20080101.@cluster0-exkw1.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () { return console.log('connect to db'); });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/', indexRouter);
app.use('/users', Users);
app.use('/items', items);


export default app;