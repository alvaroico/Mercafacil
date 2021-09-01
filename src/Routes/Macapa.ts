import express, { Request, Response, NextFunction } from "express";
const router = express.Router();
import Macapa from "../Controllers/Macapa";

router.get(
  "/",
  function (request: Request, response: Response, next: NextFunction) {
    response.send("Rota Macapá");
  }
);
router.post("/CadastroTelefone", Macapa.CadastroTelefone);

export default router;
