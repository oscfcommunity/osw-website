/**
 * Generic badge class generator
 * Maps a key to a badge style using a color mapping
 */
export function getBadgeClass(
  key: string,
  colorMap: Record<string, string>,
  defaultColor: string = 'neutral'
): string {
  return `badge-${colorMap[key] || defaultColor}`;
}

/**
 * Get category badge class for jobs
 */
export function getCategoryBadgeClass(
  category: string,
  categoryColors: Record<string, string>,
  defaultColor: string = 'neutral'
): string {
  return getBadgeClass(category, categoryColors, defaultColor);
}

/**
 * Get status badge class for events
 */
export function getStatusBadgeClass(status: string): string {
  const statusMap: Record<string, string> = {
    upcoming: 'info',
    ongoing: 'success',
    completed: 'neutral',
    cancelled: 'error',
  };

  return getBadgeClass(status, statusMap, 'neutral');
}
