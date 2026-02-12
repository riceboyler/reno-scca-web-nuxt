import { getConnection } from "~/db/db";
import type { SoloYearConfig } from "~/db/models/Results.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM SoloYearConfig ORDER BY Year DESC");
  return result.recordset as SoloYearConfig[];
});
