import { format, formatDistance, formatDistanceToNow } from 'date-fns';

export function getRelativeTime(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

export function getRelativeTimeBetween(
  date: Date,
  baseDate: Date = new Date()
): string {
  return formatDistance(date, baseDate, { addSuffix: true });
}

export function formatEventDate(date: Date, endDate?: Date): string {
  const startStr = format(date, 'MMM d, yyyy');

  if (endDate) {
    const endStr = format(endDate, 'MMM d, yyyy');
    return `${startStr} - ${endStr}`;
  }

  return startStr;
}

export function formatTime(date: Date): string {
  return format(date, 'h:mm a');
}
