import { DateTime } from "luxon";

export function dateISO(date: Date) {
  return date.toISOString();
}

export function timeSince(date: Date) {
  return DateTime.fromJSDate(date).toRelative();
}

export function datePretty(date: Date) {
  return DateTime.fromJSDate(date).toFormat("LLL dd, yyyy");
}
