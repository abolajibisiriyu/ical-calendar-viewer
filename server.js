const express = require("express");
const axois = require("axios");
const cors = require("cors");

const APP = express();
const PORT = 9001;
APP.use(cors());

APP.get("/", async (req, res) => {
  const response = await axois.get(req.query.url);
  res.json({ data: response.data });
});

APP.listen(PORT, () => {
  console.log(`APP running on http://localhost:${PORT}`);
});
