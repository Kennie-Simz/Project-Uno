import express from 'express';

const propertyRouter = express.Router();

// Create a property ad
propertyRouter.post('/', (req, res) => {
  res.send('We are on property');
});

propertyRouter.patch('/:id', (req, res) => {
  res.send('We are on users');
});

propertyRouter.patch('/:id/sold', (req, res) => {
  res.send('We are on users');
});

propertyRouter.delete('/:id', (req, res) => {
  res.send('We are on users');
});

propertyRouter.get('/:id', (req, res) => {
  res.send('We are on users');
});

propertyRouter.get('/', (req, res) => {
  res.send('We are on users');
});

propertyRouter.get('/:id?type=propertyType', (req, res) => {
  res.send('We are on users');
});

export default propertyRouter;
