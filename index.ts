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

app.put("/floors", async (req: Request, res: Response) => {
  const { floor_no, name, house_count } = req.body;
  const updatedFloor = await prisma.floor.update({
    where: {
      floor_no: Number(floor_no),
    },
    data: {
      name,
      house_count: Number(house_count),
    },
  });

  res.json(updatedFloor);
});

app.delete("/floors/:id", async (req: Request, res: Response) => {
  const floor_no = req.params.id;
  const deletedFloor = await prisma.floor.delete({
    where: {
      floor_no: Number(floor_no),
    },
  });

  res.json(deletedFloor);
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
