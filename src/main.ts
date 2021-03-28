import { App } from './app';
import { UserController } from './user/user.controller';

const app = new App({
  port: 5000,
  controllers: [
    new UserController(),
  ],
});

app.listen();
