import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const tenantRoute = express.Router();

tenantRoute.post("/tenants", async (req: Request, res: Response) => {
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

tenantRoute.get("/tenants", async (req: Request, res: Response) => {
  const allTenants = await prisma.tenant.findMany();
  res.json(allTenants);
});

tenantRoute.put("/tenants", async (req: Request, res: Response) => {
  const { id, email } = req.body;

  const updatedTenant = await prisma.tenant.update({
    where: {
      id: Number(id),
    },
    data: {
      email,
    },
  });
  res.json(updatedTenant);
});

tenantRoute.delete("/tenants/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedTenant = await prisma.tenant.delete({
    where: {
      id: Number(id),
    },
  });

  res.json(deletedTenant);
});

export default tenantRoute;
