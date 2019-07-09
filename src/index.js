import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/auth';
import propertyRouter from './routes/property';

const app = express();
app.use(bodyParser.json());

const PORT = 4000;

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/property', propertyRouter);

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
