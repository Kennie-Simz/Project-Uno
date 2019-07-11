import express from 'express';
import propertyController from '../controllers/propertyController';
import AuthRequired from '../middleware';

const propertyRouter = express.Router();

// Create a property ad
propertyRouter.post('/', AuthRequired, propertyController.createProperty);

propertyRouter.patch('/:id', propertyController.updateProperty);

propertyRouter.patch('/:id/sold', propertyController.sellProperty);

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
