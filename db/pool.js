import { Pool } from 'pg';

const { DB_HOST, DB_PORT, DB_ROLE_NAME, DB, DB_PASSWORD } = process.env;

export default new Pool({
  host: DB_HOST, // 'localhost' or wherever the db is hosted
  user: DB_ROLE_NAME, // '<role_name>'
  database: DB, // 'top_users'
  password: DB_PASSWORD, // '<role_password>'
  port: DB_PORT, // 5432 The default port
});

// Using Connection URI
// export default new Pool({
//   // 'postgresql://<role_name>:<role_password>@localhost:5432/top_users'
//   connectionString: `postgresql://${DB_ROLE_NAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB}`,
// });
