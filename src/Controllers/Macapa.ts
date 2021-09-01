import { Request, Response, NextFunction } from "express";
import { InsertMYsql, OkPacket } from "../connection/Mysql";
import { MascaraTelefone, CapitalizeUP } from "../tools/Ferramentas";
import { contacts } from "../interfaces/Macapa";

const CadastroTelefone = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { contacts } = request.body as { contacts: Array<contacts> };

  if (contacts != undefined && contacts.length > 0) {
    let dadosInseridos = false;
    for await (const dadoContacts of contacts) {
      await InsertMYsql(`INSERT INTO admin.contacts
      (nome, celular)
      VALUES('${CapitalizeUP(dadoContacts.name)}', '${MascaraTelefone(
        dadoContacts.cellphone
      )}')`)
        .then((result) => {
          const MYsqlRetorno = result as OkPacket;
          if (
            MYsqlRetorno.affectedRows == 0 &&
            MYsqlRetorno.affectedRows == undefined
          ) {
            response.status(400).json({
              message: `Erro ao Salvar no MYsql ${MYsqlRetorno}`,
            });
          } else {
            dadosInseridos = true;
          }
        })
        .catch((error) => {
          dadosInseridos = false;
          response.status(400).json({
            message: `Erro ao Salvar no MYsql ${error}`,
          });
        });
    }
    if (dadosInseridos) {
      response.status(200).json({
        message: "Contatos Cadastrados",
      });
    }
  } else {
    response.status(400).json({
      message: "Contatos não informados",
    });
  }
};

export default {
  CadastroTelefone: CadastroTelefone,
};
