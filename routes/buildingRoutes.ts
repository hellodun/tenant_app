import express from "express";
import {
  addBuilding,
  getBuildings,
  updateBuilding,
  removeBuilding,
} from "../controllers/buildingController";

const buildingRoute = express.Router();

buildingRoute.post("/buildings/add", addBuilding);

buildingRoute.get("/buildings", getBuildings);

buildingRoute.put("/buildings/:id", updateBuilding);

buildingRoute.delete("/buildings/:id", removeBuilding);

export default buildingRoute;
