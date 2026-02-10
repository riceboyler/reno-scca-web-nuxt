import { getConnection } from "~/db/db";
import type { SoloScore } from "~/db/models/SoloScore.model";

export default defineEventHandler(async (event) => {
  const eventNumber = getRouterParam(event, "event") as string;
  const query = getQuery(event);

  if (!query.year) {
    throw createError({ statusCode: 400, statusMessage: "Year is required" });
  }

  if (!eventNumber) {
    throw createError({ statusCode: 400, statusMessage: "Event is required" });
  }

  const { year } = query;

  const pool = await getConnection();
  const result = await pool
    .request()
    .query(
      `SELECT * FROM SoloScores WHERE Year = ${year} AND EventNum = ${eventNumber} ORDER BY RawPos ASC, PaxPos ASC`
    );
  return result.recordset as SoloScore[];
});
