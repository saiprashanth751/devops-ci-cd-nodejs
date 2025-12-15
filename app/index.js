const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("DevOps CI/CD Pipeline is running 🚀");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
