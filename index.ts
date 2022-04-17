import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import floorRoute from "./routes/floorRoutes";

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.use(floorRoute);

app.post("/tenants", async (req: Request, res: Response) => {
  const { name, email, phone, passport_id, house_no, floor_no, status } =
    req.body;
  const newTenant = await prisma.tenant.create({
    data: {
      name,
      email,
      phone: Number(phone),
      passport_id: Number(passport_id),
      floor_no: Number(floor_no),
      status,
    },
  });

  res.json(newTenant);
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
