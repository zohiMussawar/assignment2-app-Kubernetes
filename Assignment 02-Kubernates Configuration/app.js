import express from "express";

const app = express();
const port = process.env.PORT || 8080;

// ConfigMap
app.get("/configValue", (req, res) => {
  res.send(process.env.CONFIG_VALUE || "no-config");
});

// Secret
app.get("/secretValue", (req, res) => {
  res.send(process.env.SECRET_VALUE || "no-secret");
});

// Env
app.get("/envValue", (req, res) => {
  res.send(process.env.ENV_VALUE || "no-env");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
