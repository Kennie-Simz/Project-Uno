import express from 'express';

const propertyRouter = express.Router();

// Create a property ad
propertyRouter.post('/', (req, res) => {
  res.send('We are on property');
});

// Update a property  
propertyRouter.patch('/:id', (req, res) => {
  res.send('We are on users');
});

// Mark property as sold
propertyRouter.patch('/:id/sold', (req, res) => {
  res.send('We are on users');
});

// Delete property of a specific type
propertyRouter.delete('/:id', (req, res) => {
  res.send('We are on users');
});

// Get property of a specific type
propertyRouter.get('/:id', (req, res) => {
  res.send('We are on users');
});

// Get all property
propertyRouter.get('/', (req, res) => {
  res.send('We are on users');
});

// Get a specific property by id
propertyRouter.get('/:id?type=propertyType', (req, res) => {
  res.send('We are on users');
});

export default propertyRouter;
