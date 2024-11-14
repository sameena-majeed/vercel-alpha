const express = require("express");
const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("All set to goo !!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
