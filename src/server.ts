import express, { Application } from "express";
import "dotenv/config";
import { connectDb } from "./config/database.js";
import { app } from "./app.js";

class Server {
  private port: number;
  private appServer: Application;

  constructor() {
    this.port = Number(process.env.PORT) || 3000;
    this.appServer = app()
  }

  private async conectarBaseDatos(): Promise<void> {
    connectDb()
  }

  public async start(): Promise<void> {
    await this.conectarBaseDatos();
    
    this.appServer.listen(this.port, () => {
      console.log(`Servidor escuchando en http://localhost:${this.port}`);
    });
  }
}

const server = new Server();
server.start();