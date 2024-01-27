import express from "express";
import { PORT, mongoDBURL } from "./database.js";
import mongoose from "mongoose";
import siswaRoute from "../routes/siswaRoutes.js";
import guruRoute from "../routes/guruRoutes.js";
import userRoute from "../routes/userRoutes.js";
import kesehatanSiswaRoute from "../routes/kesehatanSiswaRoutes.js";
import pencapaianSiswaRoute from "../routes/pencapaianSiswaRoutes.js";
import orangTuaSiswaRoute from "../routes/orangTuaSiswaRoutes.js";
import calonSiswaRoute from "../routes/calonSiswaRoutes.js";

import cookieParser from "cookie-parser";

import Cors from "cors";

export const app = express();

const corsOptions = {
  origin: "http://localhost:3000", // Alamat domain React
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Mengizinkan pengiriman cookies
  optionsSuccessStatus: 204,
};

app.use(Cors(corsOptions));

//middleware for parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("hello");
});

app.use(cookieParser());
app.use("/api/siswa", siswaRoute);
app.use("/api/calon_siswa", calonSiswaRoute);
app.use("/api/siswa/kesehatan", kesehatanSiswaRoute);
app.use("/api/siswa/pencapaian", pencapaianSiswaRoute);
app.use("/api/siswa/orang_tua", orangTuaSiswaRoute);

app.use("/api/guru", guruRoute);
app.use("/api/users", userRoute);

mongoose.connect(mongoDBURL).then(() => {
  console.log("App connected to database");
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
});
