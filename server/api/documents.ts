import { getConnection } from "~/db/db";
import type { DocumentModel } from "~/db/models/Document.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM Documents");
  return result.recordset as DocumentModel[];
});
