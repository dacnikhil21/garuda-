import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.query('SELECT NOW()')
  .then(res => console.log('Connected!', res.rows[0]))
  .catch(err => console.error('Error connecting:', err.message))
  .finally(() => pool.end());
