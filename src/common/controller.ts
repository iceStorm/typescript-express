import express from 'express';

export class BaseController {
  public path: string;
  public router = express.Router();

  constructor(path: string) {
    this.path = path;
  }
}
