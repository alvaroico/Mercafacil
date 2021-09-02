import { InsertMYsql } from "./connection/Mysql";
import { PoolPostgreSQL } from "./connection/PostgreSQL";

const job = async () => {
  await PoolPostgreSQL(`CREATE table contacts (
    id serial PRIMARY KEY,
    nome VARCHAR ( 100 ) NOT NULL,
    celular VARCHAR ( 13 ) NOT NULL
  );`)
    .then(async (resultado) => {
      // console.log(resultado);
      console.info("Tabela no PostgreSQL criada com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });
  await InsertMYsql(`CREATE table contacts (
    id serial PRIMARY KEY,
    nome VARCHAR ( 200 ) NOT NULL,
    celular VARCHAR ( 20 ) NOT NULL
  )
`)
    .then(async (resultado) => {
      // console.log(resultado);
      console.info("Tabela no MySql criada com sucesso!");
    })
    .catch((err) => {
      console.log(err);
    });

  process.exit(1);
};
job();
