import { getConnection } from "~/db/db";
import type { SoloYearConfig } from "~/db/models/Results.model";

export default defineEventHandler(async (event) => {
  const year = getRouterParam(event, "year") as string;
  const pool = await getConnection();
  const result = await pool.request().query(`SELECT * FROM SoloYearConfig WHERE Year = ${year}`);
  return result.recordset[0] as SoloYearConfig;
});
