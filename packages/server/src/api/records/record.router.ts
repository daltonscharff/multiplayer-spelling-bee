import express, { Request, Response } from "express";
import * as RecordService from "./record.service";

export const recordRouter = express.Router();

recordRouter.get("/:shortcode", async (req: Request, res: Response) => {
  const shortcode = req.params.shortcode;
  try {
    const records = await RecordService.findAllInRoom(shortcode);
    res.send(records);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

recordRouter.post("/", async (req: Request, res: Response) => {
  const { shortcode, username, word } = req.body;
  try {
    const record = await RecordService.create(word, shortcode, username);
    if (record) return res.status(201).send(record);
    res.status(204).send();
  } catch (e) {
    res.status(500).send(e.message);
  }
});

export default recordRouter;
