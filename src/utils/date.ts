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

export function formatTime(date: Date, timezone?: string): string {
  const timeStr = format(date, 'h:mm a');
  return timezone ? `${timeStr} ${timezone}` : timeStr;
}

/**
 * Format date and time together
 * Example: "October 5, 2025 at 9:00 AM"
 */
export function formatDateTime(date: Date, timezone?: string): string {
  const dateStr = format(date, 'MMMM d, yyyy');
  const timeStr = formatTime(date, timezone);
  return `${dateStr} at ${timeStr}`;
}

/**
 * Calculate duration between two dates
 * Example: "45 minutes" or "1.5 hours" or "2 days"
 */
export function calculateDuration(start: Date, end: Date): string {
  const diffMs = end.getTime() - start.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = diffMinutes / 60;
  const diffDays = diffHours / 24;

  if (diffMinutes < 60) {
    return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''}`;
  } else if (diffHours < 24) {
    const hours = Math.floor(diffHours);
    const minutes = diffMinutes % 60;
    if (minutes === 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''}`;
    }
    return `${hours}h ${minutes}m`;
  } else {
    const days = Math.floor(diffDays);
    return `${days} day${days !== 1 ? 's' : ''}`;
  }
}

/**
 * Check if date is in the past
 */
export function isPastDate(date: Date): boolean {
  return date < new Date();
}

/**
 * Format a date range with smart formatting
 * Same day: "October 5, 2025 • 9:00 AM - 6:00 PM"
 * Different days: "October 5 - 7, 2025"
 */
export function formatDateRange(
  start: Date,
  end?: Date,
  timezone?: string
): string {
  if (!end) {
    return formatDateTime(start, timezone);
  }

  const startDate = format(start, 'yyyy-MM-dd');
  const endDate = format(end, 'yyyy-MM-dd');

  // Same day
  if (startDate === endDate) {
    const dateStr = format(start, 'MMMM d, yyyy');
    const startTime = formatTime(start);
    const endTime = formatTime(end);
    const tzStr = timezone ? ` ${timezone}` : '';
    return `${dateStr} • ${startTime} - ${endTime}${tzStr}`;
  }

  // Different days, same month and year
  if (format(start, 'yyyy-MM') === format(end, 'yyyy-MM')) {
    const startDay = format(start, 'd');
    const endStr = format(end, 'd, yyyy');
    const month = format(start, 'MMMM');
    return `${month} ${startDay} - ${endStr}`;
  }

  // Different months or years
  return formatEventDate(start, end);
}
