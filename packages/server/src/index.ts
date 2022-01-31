import express from "express";
import { createServer } from "http";
import cors from "cors";
import helmet from "helmet";
import { Server } from "socket.io";
import router from "./routes";
import wsHandler from "./ws/handler";
import connect from "@daltonscharff/spelling-bee-core";

connect()
  .then((knex) => {
    const port = parseInt(process.env.PORT, 10) || 3000;
    const hostname = process.env.HOSTNAME || "localhost";
    const app = express();

    app.use(helmet());
    app.use(cors());
    app.use(express.json());
    app.use(router);

    const httpServer = createServer(app);
    const io = new Server(httpServer);

    // io.on("connection", wsHandler);

    httpServer.listen(port, hostname, () => {
      console.log(`Listening at http://${hostname}:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
