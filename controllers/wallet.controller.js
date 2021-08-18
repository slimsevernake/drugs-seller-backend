import { pool } from "../database.js";

pool.connect;

export const createWallet = async (req, res) => {
  const { dirtyMoney } = req.body;
  console.log("🚀 ~ file: wallet.controller.js ~ line 7 ~ createWal ~ req.body", req.body)

  let result = null;
  await pool
    .query("UPDATE wallet SET dirty_money_wallet = $1 WHERE id_wallet = 1;", 
    [dirtyMoney]
    )
    .then((_response) => {
      result = true;
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });

  return res.json(result);
};


export const getWallet = async (req, res) => {
  let result = null;

  await pool
    .query('SELECT dirty_money_wallet FROM wallet WHERE id_wallet = 1')
    .then((res) => {
      result = res.rows[0]
    })
    .catch ((error) => console.log(error.stack))
  return res.json(result);
  console.log("🚀 ~ file: wallet.controller.js ~ line 36 ~ getWal ~ result", result)
}