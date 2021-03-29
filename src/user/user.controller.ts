import { BaseController } from '@/common/base.controller';
import express from 'express';
import { User } from './user.interface';
import { UserService } from './user.service';

export class UserController implements BaseController {
  service: UserService;
  router: express.Router;
  path: string = '/users';

  constructor() {
    this.router = express.Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(this.path, this.get);
    this.router.post(this.path, this.createUser);
  }

  get = (req: express.Request, res: express.Response) => {
    res.status(200).send('Ók.');
  }

  createUser = (req: express.Request, res: express.Response) => {
    const post: User = req.body;
    res.send(post);
  }
}
