import express from 'express';
import userRouter from '../routes/auth';
import propertyRouter from '../routes/property';
// import logger from '../middleware/logger';


const app = express();

// Init Middleware
// app.use(logger);

// Body parser middleware
app.use(express.json());

// Static folder
app.use(express.static(__dirname, 'Project-Uno'));

app.use('/api/v1/auth', userRouter);
app.use('/api/v1/property', propertyRouter);

const PORT = process.env.port || 4000;


// app.get('/', (req, res) => res.send('Hello World, We are live!'));

// listening for requests
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Ready for requests at port ${PORT}`));
