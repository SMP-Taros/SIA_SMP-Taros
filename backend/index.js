import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import siswaRoute from "./routes/siswaRoutes.js";
import guruRoute from "./routes/guruRoutes.js";

export const app = express();

//middleware for parsing request body
app.use(express.json());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('hello');
})

app.use('/siswa', siswaRoute)
app.use('/guru', guruRoute)


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })