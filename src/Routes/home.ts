import express from "express";
var router = express.Router();

router.get("/", function (req, res) {
  res.send("Rota Home");
});

export default router;