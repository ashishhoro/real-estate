import express from 'express';
import { signup, singin, google, signout } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);

router.post('/signin', singin);

router.post('/google', google);

router.get('/signout', signout);

export default router;