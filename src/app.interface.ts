import { BaseController } from './common/controller';

export interface AppConstructor {
  port: number;
  controllers: BaseController[];
}
