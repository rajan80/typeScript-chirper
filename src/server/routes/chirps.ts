import * as express from "express";
let router = express.Router();
import {
  GetChirps,
  GetChirp,
  UpdateChirp,
  CreateChirp,
  DeleteChirp,
} from "../chirpsStore";

router.get("/", (req, res) => {
  //   res.send("test");
  res.send(GetChirps());
});

router.post("/", (req, res) => {
  CreateChirp(req.body);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  res.send(UpdateChirp(id, req.body));
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.send(DeleteChirp(id));
});

export default router;
