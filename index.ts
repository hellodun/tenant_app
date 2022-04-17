import express from "express";
import floorRoute from "./routes/floorRoutes";
import tenantRoute from "./routes/tenantRoutes";

const app = express();
app.use(express.json());
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/floorss", (req, res) => {
  res.render("floors");
});

app.get("/tenantss", (req, res) => {
  res.render("tenants");
});

app.use(floorRoute);
app.use(tenantRoute);

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`App running on port ${PORT}`));
