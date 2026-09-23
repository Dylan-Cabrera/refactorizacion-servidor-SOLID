import express, { Application } from "express";
import "dotenv/config";
import { connectDb } from "./config/database.js";

class Server {
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(process.env.PORT) || 3000;
  }

  private async conectarBaseDatos(): Promise<void> {
    connectDb()
  }

  public async start(): Promise<void> {
    await this.conectarBaseDatos();

    this.app.use(express.json());
    
    this.app.listen(this.port, () => {
      console.log(`Servidor escuchando en http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.start();