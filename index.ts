import express, { Request, Response } from "express";
import floorRoute from "./routes/floorRoutes";

const app = express();
app.use(express.json());

app.use(floorRoute);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
