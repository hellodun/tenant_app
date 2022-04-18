import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createFloor = async (req: Request, res: Response) => {
  const { name, house_count, rent } = req.body;

  const newFloor = await prisma.floor.create({
    data: {
      name,
      house_count: Number(house_count),
      rent: Number(rent),
    },
  });

  res.redirect("/floors");
};

const getFloors = async (req: Request, res: Response) => {
  const floors = await prisma.floor.findMany();
  res.json(floors);
};

const updateFloor = async (req: Request, res: Response) => {
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
};

const deleteFloor = async (req: Request, res: Response) => {
  const floor_no = req.params.id;
  const deletedFloor = await prisma.floor.delete({
    where: {
      floor_no: Number(floor_no),
    },
  });

  res.json(deletedFloor);
};

export { createFloor, getFloors, updateFloor, deleteFloor };
