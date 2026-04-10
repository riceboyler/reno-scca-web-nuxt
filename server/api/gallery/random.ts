import { getConnection } from "~/db/db";
import type { GalleryModel } from "~/db/models/Gallery.model";

function formatUrls(field: string, item: GalleryModel) {
  const fieldSegments = field.split("/");

  fieldSegments[7] = fieldSegments[7].toLowerCase();
  item.ThumbnailImagePath = "";
  fieldSegments.forEach((seg) => {
    item.ThumbnailImagePath += seg + "/";
    item.ThumbnailImagePath = item.ThumbnailImagePath.replace(".jpg/", ".jpg");
  });
}

export default defineEventHandler(async () => {
  const pool = await getConnection();

  const result = await pool
    .request()
    .query(`SELECT TOP 12 ID, ThumbnailImagePath, FullSizeImagePath FROM Gallery ORDER BY NEWID()`);

  const rawGalleryItems = result.recordset as GalleryModel[];

  const galleryItems = rawGalleryItems.map((item) => {
    formatUrls(item.ThumbnailImagePath, item);
    formatUrls(item.FullSizeImagePath, item);

    return item;
  });

  return galleryItems;
});
