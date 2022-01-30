import express from "express";
import { createServer } from "http";
import cors from "cors";
import helmet from "helmet";
import { Server } from "socket.io";
import roomRouter from "./api/rooms/room.router";
import puzzleRouter from "./api/puzzles/puzzle.router";
import recordRouter from "./api/records/record.router";
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
    app.use("/api/rooms", roomRouter);
    app.use("/api/puzzles", puzzleRouter);
    app.use("/api/records", recordRouter);

    const httpServer = createServer(app);
    const io = new Server(httpServer);

    io.on("connection", wsHandler);

    httpServer.listen(port, hostname, () => {
      console.log(`Listening at http://${hostname}:${port}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
