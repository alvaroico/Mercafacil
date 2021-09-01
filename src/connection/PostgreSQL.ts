import { Pool, Client, QueryResult } from "pg";

const connectionString = "postgresql://admin:admin@localhost:5432/postgres";
const pool = new Pool({
  connectionString,
});

export const PoolPostgreSQL = (query: string) => {
  return new Promise((resolve, reject) => {
    pool.query(query, (err, res) => {
      if (err) {
        // pool.end();
        reject(err);
      } else {
        // pool.end();
        resolve(res);
      }
    });
  });
};

const client = new Client({
  connectionString,
});

client.connect();

export const ClientPostgreSQL = (query: string) => {
  return new Promise((resolve, reject) => {
    client.query(query, (err, res) => {
      if (err) {
        pool.end();
        reject(err);
      } else {
        pool.end();
        resolve(res);
      }
    });
  });
};

export { QueryResult };
