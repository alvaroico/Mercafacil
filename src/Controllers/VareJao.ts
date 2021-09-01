import { Request, Response, NextFunction } from "express";

const CadastroTelefone = async (
  request: Request, response: Response, next: NextFunction
) => {
  response.send("VareJao");
};

export default {
  CadastroTelefone: CadastroTelefone,
};
