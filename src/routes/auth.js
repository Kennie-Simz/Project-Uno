import express from 'express';

const userRouter = express.Router();

// Create a user
userRouter.post('/signup', (req, res) => {
  res.send('We are on users');
});

// Login a user
userRouter.post('/signin', (req, res) => {
  res.send('We are on users');
});

export default userRouter;
