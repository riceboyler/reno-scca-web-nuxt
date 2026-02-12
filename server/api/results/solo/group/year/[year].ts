import { getConnection } from "~/db/db";
import type { SoloYearScore } from "~/db/models/SoloYearScore.model";

export default defineEventHandler(async (event) => {
  const year = getRouterParam(event, "year") as string;

  if (!year) {
    throw createError({ statusCode: 400, statusMessage: "Year is required" });
  }

  const pool = await getConnection();
  const result = await pool
    .request()
    .query(
      `SELECT * FROM SoloYearScores WHERE Year = ${year} AND ScoreType = 'group' ORDER BY Position ASC, GroupNum DESC`
    );
  return result.recordset as SoloYearScore[];
});
