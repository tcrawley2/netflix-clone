import express from "express";
const app = express();

// best practice - "api/{version_number}/endpoint"
app.get("/api/v1/signup", (req, res) => {
  res.send("signup route");
});
app.get("/api/v1/login", (req, res) => {
  res.send("login route");
});
app.get("/api/v1/logout", (req, res) => {
  res.send("logout route");
});

app.listen(5500, () => {
  console.log("Server started at http://localhost:5500");
});
