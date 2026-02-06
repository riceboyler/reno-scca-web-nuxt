import { getConnection } from "~/db/db";
import type { HomeContentModel } from "~/db/models/HomeContent.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM HomeContent");
  return result.recordset as HomeContentModel[];
});
