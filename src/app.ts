import express from 'express';
import logger from 'morgan';
import { AppConstructor } from './app.interface';
import { BaseController } from './common/base.controller';

export class App {
  private port: number;
  private app: express.Application;
  private controllers: BaseController[];

  constructor(app: AppConstructor) {
    this.app = express();
    this.port = app.port;
    this.controllers = app.controllers;

    this.initializeMiddlewares();
    this.initializeControllers();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log('The server listening on port:', this.port);
    });
  }

  initializeControllers() {
    this.controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  initializeMiddlewares() {
    this.app.use(logger('dev'));

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
