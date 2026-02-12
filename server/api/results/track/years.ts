import { getConnection } from "~/db/db";
import type { TrackYearConfig } from "~/db/models/Results.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM TrackYearConfig ORDER BY Year DESC");
  return result.recordset as TrackYearConfig[];
});
