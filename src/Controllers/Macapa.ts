import { Request, Response, NextFunction } from "express";

const CadastroTelefone = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Macapá");
};

export default {
  CadastroTelefone: CadastroTelefone,
};
