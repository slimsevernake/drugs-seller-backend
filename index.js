import express from "express";
import cors from 'cors';

import router from "./routes/index.js";

const app = express();

// MiddleWares
app.use(cors())
app.use(express.json())

// Routes
app.use("/api", router);

app.listen(3000, () => console.log(`Server on port`, 3000));
