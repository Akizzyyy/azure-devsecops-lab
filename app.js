const express = require("express");
const app = express();

const demoSecret = "DEMO_SECRET = fakepassword123";

app.get("/", (req, res) => {
  const name = req.query.name || "World";
  res.send("Hello " + name);
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
