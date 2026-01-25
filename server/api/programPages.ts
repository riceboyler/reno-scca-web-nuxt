import { getConnection } from "~/db/db";
import type { ProgramPageModel } from "~/db/models/ProgramPage.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query(`SELECT * FROM ProgramPages`);
  return result.recordset as ProgramPageModel[];
});
