import express from "express";
import buildingRoute from "./routes/buildingRoutes";
import tenantRoute from "./routes/tenantRoutes";

const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/tenants/add", (req, res) => {
  res.render("addTenant", { title: "Add tenant" });
});

app.get("/buildings/add", (req, res) => {
  res.render("addBuilding", { title: "Add building" });
});

app.use(buildingRoute);
app.use(tenantRoute);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
