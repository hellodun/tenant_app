import express from "express";
import buildingRoute from "./routes/buildingRoutes";
import tenantRoute from "./routes/tenantRoutes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/tenants");
});

app.use(buildingRoute);
app.use(tenantRoute);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
