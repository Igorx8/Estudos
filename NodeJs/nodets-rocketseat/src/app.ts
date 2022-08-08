import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middleWares();
    this.database();
    this.routes();
  }

  private middleWares(): void {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect('mongodb://root:example@127.0.0.1:27017/api?authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => console.log('logou')).catch((err) => console.log(err));
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express