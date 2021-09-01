import express from "express";
const app = express();

app.use(express.json());
app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});
import homeRota from "./Routes/home";
import VareJao from "./Routes/VareJao";
import Macapa from "./Routes/Macapa";

app.use("/", homeRota);
app.use("/VareJao", VareJao);
app.use("/Macapa", Macapa);

app.listen(8822, () => {
  console.log(`🙌😎 Servidor HTTP rodando porta: ${8822} 👌`);
});
