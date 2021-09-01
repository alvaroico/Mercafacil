import express from "express";
const app = express();
app.use(express.json());

import homeRota from "./Routes/home";
import VareJao from "./Routes/VareJao";
import Macapa from "./Routes/Macapa";
import { JWTDecode } from "./Middleware/JWTDecode";

app.use("/", homeRota);
app.use("/VareJao", JWTDecode('VareJao'), VareJao);
app.use("/Macapa", JWTDecode('Macapa'), Macapa);

app.listen(8822, () => {
  console.log(`🙌😎 Servidor HTTP rodando porta: ${8822} 👌`);
});
