const express = require('express');

const app = express();
const PORT = process.env.port || 3000;


app.get('/', (req, res) => res.send('Hello World, We are live!'));

// listening for requests
app.listen(PORT, () => console.log(`Ready for requests at port ${PORT}`));
