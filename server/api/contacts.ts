import { getConnection } from "~/db/db";
import type { ContactModel } from "~/db/models/Contact.model";

export default defineEventHandler(async () => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM Contacts");
  const contacts = result.recordset as ContactModel[];
  const types = [...new Set(contacts.map((contact) => contact.Type))] as string[];
  return { contacts, types };
});
