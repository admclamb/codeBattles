const router = require('express').Router();
import { controller } from './user.controller';
import { methodNotAllowed } from '../errors/methodNotAllowed';

router.route('/login').post(controller.login).all(methodNotAllowed);
router.route('/logout').post(controller.logout).all(methodNotAllowed);
router.router
  .Router('/')
  .post(controller.create)
  .delete(controller.destroy)
  .all(methodNotAllowed);
