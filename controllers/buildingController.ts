import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const addBuilding = async (req: Request, res: Response) => {
  const { name, house_count, rent } = req.body;

  const building = await prisma.building.create({
    data: {
      name,
      house_count: Number(house_count),
      rent: Number(rent),
    },
  });

  res.redirect("/buildings");
};

const getBuildings = async (req: Request, res: Response) => {
  const buildings = await prisma.building.findMany();
  res.json(buildings);
};

const updateBuilding = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, house_count } = req.body;
  const updatedBuilding = await prisma.building.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      house_count: Number(house_count),
    },
  });

  res.json(updateBuilding);
};

const removeBuilding = async (req: Request, res: Response) => {
  const id = req.params.id;
  const removedBuilding = await prisma.building.delete({
    where: {
      id: Number(id),
    },
  });

  res.json(removedBuilding);
};

export { addBuilding, getBuildings, updateBuilding, removeBuilding };
