import { BaseController } from '../common/controller';

export class UserController extends BaseController {
  constructor(path: string = 'users') {
    super(path);
  }
}
