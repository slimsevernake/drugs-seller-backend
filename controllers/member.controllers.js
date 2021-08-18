import sha256 from "sha256";
import { pool } from "../database.js";

pool.connect;

export const createMember = async (req, res) => {
  let { pseudo, password, isAdmin } = req.body;
  
  password = sha256(password)

  let result = null;
  await pool
    .query(
      `INSERT INTO members (pseudo_members, password_members, isadmin_members) VALUES ($1,$2,$3);`,
      [pseudo, password, isAdmin]
    )
    .then((response) => {
      result = true;
    })
    .catch((error) => {
      result = false;
    });

  return res.json(result);
};

export async function getAllMembers(req, res) {
  let result = null;
  await pool
    .query('SELECT * FROM members;')
    .then((res) => {
         result = res.rows
    })
    .catch((error) => console.error(error.stack))
  return res.json(result);
};

export async function getMemberById(req, res) {
  const idMember = req.body

  let result = null;
  await pool
    .query('SELECT * FROM members WHERE id_members = $1;',
    [idMember])
    .then((res) => {
      result = res.rows
    })
    .catch((error) => console.error(error.stack))
  return res.json(result)
  }