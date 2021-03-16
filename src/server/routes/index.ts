import * as express from 'express';
import chirpsRouter from "./chirps";

const router = express.Router();

router.use("/api/chirps", chirpsRouter);

export default router;
// router.get('/api/hello', (req, res, next) => {
//     res.json('World');
// });
// router.get("/", (req, res) => {
//     //   res.send("test");
//     res.send(chirpsStore.GetChirps());
//   });
  
//   router.post("/", (req, res) => {
//     chirpsStore.CreateChirp(req.body);
//     res.sendStatus(200);
//   });
  
//   router.put("/:id", (req, res) => {
//     let id = req.params.id;
//     res.send(chirpsStore.UpdateChirp(id, req.body));
//   });
  
//   router.delete("/:id", (req, res) => {
//       let id = req.params.id;
//       res.send(chirpsStore.DeleteChirp(id));
//   });

