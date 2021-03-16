import * as express from "express";
import apiRouter from "./routes";
const cors = require("cors");

const path = require("path");

const app = express();
app.use(express.json());

app.use(express.static("public"));
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, "../client")));
app.listen(port, () => console.log(`Server listening on port: ${port}`));
