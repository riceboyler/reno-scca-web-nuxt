import { getConnection } from "~/db/db";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM HomeNews");
  return result.recordset;
});
