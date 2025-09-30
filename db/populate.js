#! /usr/bin/env node
import dotenv from 'dotenv';
import path from 'node:path';
import url from 'node:url';
import { Client } from 'pg';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const envFilePath = path.join(projectRoot, '.env');

dotenv.config({ path: envFilePath, quiet: true });

const { DB_URI } = process.env;

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 225 )
);

INSERT INTO usernames (username)
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log('seeding...');

  // DB_URI 'postgresql://<role_name>:<role_password>@localhost:5432/top_users'
  const client = new Client({ connectionString: DB_URI });
  await client.connect();
  await client.query(SQL);
  await client.end();

  console.log('done');
}

main();
