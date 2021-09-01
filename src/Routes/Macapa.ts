import express from "express";
var router = express.Router();
import Macapa from "../Controllers/Macapa";

router.get("/", function (req, res) {
  res.send("Rota Macapá");
})
router.post("/CadastroTelefone", Macapa.CadastroTelefone)

export default router;