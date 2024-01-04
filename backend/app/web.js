import express from "express";
import { PORT, mongoDBURL } from "./database.js";
import mongoose from "mongoose";
import siswaRoute from "../routes/siswaRoutes.js";
import guruRoute from "../routes/guruRoutes.js";
import userRoute from "../routes/userRoutes.js";

import cookieParser from "cookie-parser";

export const app = express();

//middleware for parsing request body
app.use(express.json());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("hello");
});

app.use(cookieParser());
app.use("/api/siswa", siswaRoute);
app.use("/guru", guruRoute);
app.use("/api/users", userRoute);

mongoose.connect(mongoDBURL).then(() => {
  console.log("App connected to database");
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
});
