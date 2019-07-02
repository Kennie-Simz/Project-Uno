const express = require('express');

const app = express();
const port = process.env.port || 3000;


app.get('/', (req, res) => res.send('Hello World, We are live!'));

app.listen(port, () => console.log(`We are live at port ${port}`));
