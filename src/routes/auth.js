import express from 'express';
import authController from '../controllers/authController';

const userRouter = express.Router();

// Create a user
userRouter.post('/signup', authController.createUser);

userRouter.get('/signup', authController.getUsers);

// Login a user
userRouter.post('/signin', authController.logUsers);

export default userRouter;
