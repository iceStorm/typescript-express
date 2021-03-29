import { BaseService } from '@/common/base.service';
import { User } from './user.interface';

export class UserService extends BaseService {
  public createUser(model: User) {
    return model.name;
  }
}
