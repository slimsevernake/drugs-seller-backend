import { pool } from "../database.js";

pool.connect;

export const createDrugsList = async (req, res) => {
  const { drugsType, quantity, price, idUser, dateSale } = req.body;
  console.log("🚀 ~ file: drugs.controller.js ~ line 7 ~ createDrugsList ~ req.body", req.body)

  let result = null;
  await pool
    .query(
      `INSERT INTO drugs (nom_drugs, quantity_drugs, argent_drugs, fk_members_drugs, date_drugs) VALUES ($1,$2,$3,$4,$5);`,
      [drugsType, quantity, price, idUser, dateSale]
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

export const getAllDrugsList = async (req, res) => {
  let result = null;

  await pool
    .query(`SELECT * FROM drugs`)
    .then((res) => {
      result = res.rows
    })
    .catch((error) => console.log(error.stack))
  return res.json(result);
};

export const getDrugsListById = async (req, res) => {
  const { idSeller } = req.body
  // console.log("🚀 ~ file: drugs.controller.js ~ line 39 ~ getDrugsListById ~  req.body",  req.body)
  
  let result = null; 

  await pool
    .query(`SELECT nom_drugs, quantity_drugs, argent_drugs FROM drugs WHERE fk_members_drugs = $1;`,
    [idSeller]
    )
    .then((response) => {
      result = response.rows
    })
    .catch((error) => {
      console.log(error);
      result = false;
    });
    return res.json(result);
}