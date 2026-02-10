import { getConnection } from "@/db/db";
import type { RulesModel } from "@/db/models/Rules.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM Rules WHERE PROGRAM <> 'Trials'");
  return result.recordset as RulesModel[];
});
