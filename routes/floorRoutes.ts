import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import {
  createFloor,
  getFloors,
  updateFloor,
  deleteFloor,
} from "../controllers/floorController";

const prisma = new PrismaClient();

const floorRoute = express.Router();

floorRoute.post("/floors", createFloor);

floorRoute.get("/floors", getFloors);

floorRoute.put("/floors", updateFloor);

floorRoute.delete("/floors/:id", deleteFloor);

export default floorRoute;
