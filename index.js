const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');


const app = express();

// Init Middleware
app.use(logger);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, 'Project-Uno')));

app.use('/api/v1/user', require('./routes/users'));

const PORT = process.env.port || 4000;


// app.get('/', (req, res) => res.send('Hello World, We are live!'));

// listening for requests
app.listen(PORT, () => console.log(`Ready for requests at port ${PORT}`));
