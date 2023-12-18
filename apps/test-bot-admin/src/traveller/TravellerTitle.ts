import { Traveller as TTraveller } from "../api/traveller/Traveller";

export const TRAVELLER_TITLE_FIELD = "firstName";

export const TravellerTitle = (record: TTraveller): string => {
  return record.firstName?.toString() || String(record.id);
};
