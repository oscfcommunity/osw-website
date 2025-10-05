import { format, formatDistance } from 'date-fns';

export function formatEventDate(date: Date, endDate?: Date): string {
  const startStr = format(date, 'MMM d, yyyy');
  
  if (endDate) {
    const endStr = format(endDate, 'MMM d, yyyy');
    return `${startStr} - ${endStr}`;
  }
  
  return startStr;
}

export function getStatusBadgeClass(status: string): string {
  const statusMap: Record<string, string> = {
    upcoming: 'badge-info',
    ongoing: 'badge-success',
    completed: 'badge-neutral',
    cancelled: 'badge-error',
  };
  
  return statusMap[status] || 'badge-neutral';
}

export function formatEventTime(date: Date): string {
  return format(date, 'h:mm a');
}

export function getRelativeEventDate(date: Date): string {
  return formatDistance(date, new Date(), { addSuffix: true });
}
