import express from "express";
const router = express.Router();
import VareJao from "../Controllers/VareJao";

router.get("/", function (req, res) {
  res.send("Rota VareJão");
});

router.post("/CadastroTelefone", VareJao.CadastroTelefone);

export default router;
