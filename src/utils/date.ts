import { format, formatDistance, formatDistanceToNow } from 'date-fns';

/**
 * Get relative time from now (e.g., "2 days ago", "in 3 hours")
 */
export function getRelativeTime(date: Date): string {
  return formatDistanceToNow(date, { addSuffix: true });
}

/**
 * Get relative time between two dates
 */
export function getRelativeTimeBetween(date: Date, baseDate: Date = new Date()): string {
  return formatDistance(date, baseDate, { addSuffix: true });
}

/**
 * Format event date with optional end date
 */
export function formatEventDate(date: Date, endDate?: Date): string {
  const startStr = format(date, 'MMM d, yyyy');

  if (endDate) {
    const endStr = format(endDate, 'MMM d, yyyy');
    return `${startStr} - ${endStr}`;
  }

  return startStr;
}

/**
 * Format time in 12-hour format
 */
export function formatTime(date: Date): string {
  return format(date, 'h:mm a');
}
