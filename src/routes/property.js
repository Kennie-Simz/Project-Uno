import express from 'express';
import propertyController from '../controllers/propertyController';
import AuthRequired from '../middleware';

const propertyRouter = express.Router();

// Create a property ad
propertyRouter.post('/', AuthRequired, propertyController.createProperty);

propertyRouter.patch('/:id', propertyController.updateProperty);

propertyRouter.patch('/:id/sold', propertyController.sellProperty);

propertyRouter.delete('/:id', AuthRequired, propertyController.deleteProperty);

propertyRouter.get('/:id', propertyController.getSingleProperty);

propertyRouter.get('/', propertyController.getProperties);

propertyRouter.get('/:id?type=propertyType', (req, res) => {
  res.send('We are on users');
});

export default propertyRouter;
