import { getConnection } from "~/db/db";
import type { SoloGroupModel } from "~/db/models/SoloGroup.model";

export default defineEventHandler(async (event) => {
  const year = getRouterParam(event, "year") as string;

  if (!year) {
    throw createError({ statusCode: 400, statusMessage: "Year is required" });
  }

  const pool = await getConnection();
  const result = await pool.request().query(`SELECT * FROM SoloGroups WHERE Year = ${year}`);
  return result.recordset as SoloGroupModel[];
});
