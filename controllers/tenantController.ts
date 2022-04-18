import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createTenant = async (req: Request, res: Response) => {
  const { name, email, phone, passport_id, house_no, floor_no, status } =
    req.body;
  const newTenant = await prisma.tenant.create({
    data: {
      name,
      email,
      phone: Number(phone),
      passport_id: Number(passport_id),
      house_no,
      floor_no: Number(floor_no),
      status,
    },
  });

  res.json(newTenant);
};

const getTenants = async (req: Request, res: Response) => {
  const allTenants = await prisma.tenant.findMany();
  res.json(allTenants);
};

const updateTenants = async (req: Request, res: Response) => {
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
};

const deleteTenant = async (req: Request, res: Response) => {
  const id = req.params.id;
  const deletedTenant = await prisma.tenant.delete({
    where: {
      id: Number(id),
    },
  });

  res.json(deletedTenant);
};

export { createTenant, updateTenants, getTenants, deleteTenant };
