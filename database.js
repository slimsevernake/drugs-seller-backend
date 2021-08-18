import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "selldrugs",
    password: "password",
    port: 5432, 
});

pool.connect

// export async function checkUserBdd() {
//     console.log("toto");
//     return await pool
//         .query(`SELECT * FROM Members;`)
//         .then((res) => {
//             console.log(res.rows[0]);
//             return res.rows
//         })
//         .catch((error) => console.error(error.stack));
// }