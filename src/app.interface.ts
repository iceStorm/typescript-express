import { BaseController } from './common/base.controller';

export interface AppConstructor {
  port: number;
  controllers: BaseController[];
}
