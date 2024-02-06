"use strict";
// auth.routes.ts
Object.defineProperty(exports, "__esModule", { value: true });
// Importaciones existentes...
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_controller_2 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
// Rutas existentes...
router.post('/signup', user_controller_1.signUp);
router.post('/signin', user_controller_1.signIn);
// Nuevas rutas para agregar...
router.post('/request-password-reset', user_controller_2.requestPasswordReset);
router.post('/reset-password', user_controller_2.resetUserPassword);
exports.default = router;
