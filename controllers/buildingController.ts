import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addBuilding = async (req: Request, res: Response) => {
  const { name, house_count, rent } = req.body;

  const building = await prisma.floor.create({
    data: {
      name,
      house_count: Number(house_count),
      rent: Number(rent),
    },
  });

  res.redirect("/buildings");
};

const getBuildings = async (req: Request, res: Response) => {
  const buildings = await prisma.floor.findMany();
  res.json(buildings);
};

const updateBuilding = async (req: Request, res: Response) => {
  const floor_no = req.params.id;
  const { name, house_count } = req.body;
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

const removeBuilding = async (req: Request, res: Response) => {
  const floor_no = req.params.id;
  const deletedFloor = await prisma.floor.delete({
    where: {
      floor_no: Number(floor_no),
    },
  });

  res.json(deletedFloor);
};

export { addBuilding, getBuildings, updateBuilding, removeBuilding };
