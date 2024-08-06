import express from "express";
import authRoutes from "./routes/auth.route.js";
const app = express();

app.use("/api/v1/auth", authRoutes);

app.listen(5500, () => {
  console.log("Server started at http://localhost:5500");
});
