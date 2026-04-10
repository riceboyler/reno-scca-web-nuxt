import { getConnection } from "~/db/db";
import type { GalleryEventModel } from "~/db/models/GalleryEvent.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .query("SELECT DISTINCT EventName, EventYear, EventDate, Program FROM Gallery");
  const galleryEvents = result.recordset as GalleryEventModel[];
  return galleryEvents;
});
