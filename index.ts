import express from "express";
import buildingRoute from "./routes/buildingRoutes";
import tenantRoute from "./routes/tenantRoutes";

const app = express();
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(buildingRoute);
app.use(tenantRoute);

app.get("/tenants", (req, res) => {
  res.render("tenants/create", { title: "Tenants" });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
