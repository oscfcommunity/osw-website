export function getBadgeClass(
  key: string,
  colorMap: Record<string, string>,
  defaultColor: string = 'neutral'
): string {
  return `badge-${colorMap[key] || defaultColor}`;
}

export function getCategoryBadgeClass(
  category: string,
  categoryColors: Record<string, string>,
  defaultColor: string = 'neutral'
): string {
  return getBadgeClass(category, categoryColors, defaultColor);
}

export function getStatusBadgeClass(status: string): string {
  const statusMap: Record<string, string> = {
    upcoming: 'info',
    ongoing: 'success',
    completed: 'neutral',
    cancelled: 'error',
  };

  return getBadgeClass(status, statusMap, 'neutral');
}
