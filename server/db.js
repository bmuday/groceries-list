const Pool = require("pg").Pool;
const dotenv = require("dotenv").config();

const pool = new Pool({
  user: "baboulass",
  password: process.env.password,
  host: "localhost",
  database: "todos",
  port: 5432,
});

module.exports = pool;
