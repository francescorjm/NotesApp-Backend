// auth.routes.ts

// Importaciones existentes...
import { Router } from 'express';
import { signIn, signUp } from '../controllers/user.controller';
import { requestPasswordReset, resetUserPassword } from '../controllers/user.controller';

const router = Router();

// Rutas existentes...
router.post('/signup', signUp);
router.post('/signin', signIn);

// Nuevas rutas para agregar...
router.post('/request-password-reset', requestPasswordReset);
router.post('/reset-password', resetUserPassword);

export default router;
