// config/db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',       // your PostgreSQL username
  host: 'localhost',
  database: 'myappdb',    // your database name
  password: 'Gouthams@1',
  port: 5432,
});

module.exports = pool;
