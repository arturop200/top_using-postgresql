import pool from './pool.js';

async function getAllUsernames() {
  const { rows } = await pool.query('SELECT * FROM usernames');

  return rows;
}

async function insertUsername(username) {
  await pool.query('INSERT INTO usernames (username) VALUES ($1)', [username]);
}

async function searchUsername(search) {
  const searchPattern = `%${search}%`;
  const { rows } = await pool.query(
    'SELECT * FROM usernames WHERE username ILIKE $1',
    [searchPattern],
  );

  return rows;
}

export { getAllUsernames, insertUsername, searchUsername };
