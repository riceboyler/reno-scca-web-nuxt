import { getConnection } from "~/db/db";
import type { GalleryModel } from "~/db/models/Gallery.model";

export default defineEventHandler(async (event) => {
  const eventName = getRouterParam(event, "eventName");

  let program = "solo";

  const query = getQuery(event);

  if (query.program) {
    program = query.program.toString();
  }

  const pool = await getConnection();

  const result = await pool
    .request()
    .query(
      `SELECT ID, ThumbnailImagePath, FullSizeImagePath FROM Gallery WHERE EventName = '${eventName}' AND Program = '${program}'`
    );

  const galleryItems = result.recordset as GalleryModel[];

  return galleryItems;
});
