import { getConnection } from "~/db/db";
import type { ScheduledEventModel } from "~/db/models/ScheduledEvent.model";

export default defineEventHandler(async (_event) => {
  const pool = getConnection();
  const today = new Date().toISOString().substring(0, 19).replace("T", " ");
  const result = (await pool)
    .request()
    .query(`SELECT TOP 10 * FROM ScheduledEvents WHERE Date >= '${today}'`);
  return (await result).recordset as ScheduledEventModel[];
});
