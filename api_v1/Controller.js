import cnf from "../config/default.json" assert { type: "json" };
import { conn, production } from "../index.js";

export const getStores = async (req, res) => {
  try {
    const { supercode } = req.headers;
    if (supercode === cnf.supercode || !production) {
      const stores = (await conn.query("SELECT * FROM stores"))[0];
      res.send(stores);
    } else {
      res.status(400).json({ message: "Please update your application!" });
    }
  } catch (e) {
    res.status(500).json({ message: "Something happen to th Server..." });
  }
};
