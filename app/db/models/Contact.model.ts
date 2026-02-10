export type ContactModel = {
  ID: number;
  Name: string;
  Phone: string;
  Email: string;
  Title: string;
  Type: keyof ContactType;
};

export enum ContactType {
  Board = "Board of Directors",
  Officers = "Chief Officers",
  Misc = "Miscellaneous Contacts",
}
