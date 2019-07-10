import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/auth';
import propertyRouter from './routes/property';
import { APP_PORT } from './config';

const app = express();
app.use(bodyParser.json());

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/property', propertyRouter);

app.listen(APP_PORT, () => console.log(`App listening on port ${APP_PORT}!`));
