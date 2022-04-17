import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import floorRoute from "./routes/floorRoutes";
import tenantRoute from "./routes/tenantRoutes";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.use(floorRoute);
app.use(tenantRoute);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
