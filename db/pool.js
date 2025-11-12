import { Pool } from 'pg';

let pool = new Pool({ connectionString: process.env.DATABASE_URL });
export default pool