import express from 'express';
import pg from 'pg';
import 'dotenv/config';
const pool = new pg.Pool({
  host: 'localhost',
  post: 5432,
  database: 'socialnetwork',
  user: 'girish',
  password: process.env.password,
});

pool.query('SELECT 1 + 1;').then((res) => {
  console.log(res.rows[0]);
  pool.end();
});
