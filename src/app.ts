import "dotenv/config";
import express from "express";
import cors from "cors";
import * as database from "./database";
import dishRoutes from "./routes/index";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.use('/dishes', dishRoutes);

database.connect();

app.listen(process.env.PORT, () => {
    console.log(`Server listening in port ${process.env.PORT}`);
});