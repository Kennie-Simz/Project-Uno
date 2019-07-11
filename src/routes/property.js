import express from 'express';
import propertyController from '../controllers/propertyController';

const propertyRouter = express.Router();

// Create a property ad
propertyRouter.post('/', propertyController.createProperty);

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

propertyRouter.get('/', propertyController.getProperties);

propertyRouter.get('/:id?type=propertyType', (req, res) => {
  res.send('We are on users');
});

export default propertyRouter;
