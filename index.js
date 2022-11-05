import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";
import routes from "./api_v1/Routes.js";

const app = express();

export const production = true;

app.use(express.json());
app.use(cors());
app.use("/api", routes);

const cnf1 = {
  host: "127.0.0.1",
  user: "gas",
  password: "Zeveta1559!",
  database: "kaspiservice",
  port: "3306",
};
const cnf2 = {
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "kaspiservice",
  port: "3306",
};

export const conn = mysql.createPool(production ? cnf1 : cnf2);

const PORT = 7070;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT} ...`);
});
