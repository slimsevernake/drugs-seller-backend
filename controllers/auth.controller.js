import { pool } from "../database.js";
import sha256 from "sha256";

pool.connect;

export const userAuth = async (req, res) => {
  // console.log("🚀 ~ file: auth.controller.js ~ line 8 ~ userAuth ~ req.body", req.body)
  let { pseudo, password } = req.body;

  password = sha256(password);

  let result = null;
  await pool
    .query(
      `SELECT * FROM members WHERE pseudo_members = $1 AND password_members = $2`,
      [pseudo, password]
    )
    .then((response) => {
      const user = {
        id :response.rows[0].id_members ,
        pseudo : response.rows[0].pseudo_members ,
        isAdmin : response.rows[0].isadmin_members ,
      }
      result = user;
    })
    .catch((_error) => {
      result = false;
    });

  return res.json(result);
};
