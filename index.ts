import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.post("/floors", async (req: Request, res: Response) => {
  const { name, house_count } = req.body;
  const newFloor = await prisma.floor.create({
    data: {
      name,
      house_count: Number(house_count),
    },
  });

  res.json(newFloor);
});

app.get("/floors", async (req: Request, res: Response) => {
  const floors = await prisma.floor.findMany();
  res.json(floors);
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
