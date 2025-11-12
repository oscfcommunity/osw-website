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
    upcoming: 'success',
    ongoing: 'warning',
    completed: 'info',
    cancelled: 'error',
  };

  return getBadgeClass(status.toLowerCase(), statusMap, 'neutral');
}

/**
 * Get badge class for event type
 */
export function getEventTypeBadgeClass(type: string): string {
  const typeMap: Record<string, string> = {
    workshop: 'primary',
    meetup: 'secondary',
    hackathon: 'accent',
    conference: 'primary',
    webinar: 'success',
    networking: 'warning',
  };

  return getBadgeClass(type.toLowerCase(), typeMap, 'ghost');
}

/**
 * Get badge class for session/schedule type
 */
export function getSessionTypeBadgeClass(type: string): string {
  const sessionMap: Record<string, string> = {
    keynote: 'primary',
    talk: 'info',
    registration: 'ghost',
    activity: 'ghost',
    opening: 'secondary',
    lunch: 'warning',
    closing_keynote: 'primary',
    goodies_distribution: 'success',
  };

  return getBadgeClass(type.toLowerCase(), sessionMap, 'ghost');
}

/**
 * Get badge class for profile/speaker type
 */
export function getProfileTypeBadgeClass(type: string): string {
  const profileMap: Record<string, string> = {
    speaker: 'primary',
    mentor: 'secondary',
    volunteer: 'accent',
    core_team: 'info',
    advisory: 'warning',
  };

  return getBadgeClass(type.toLowerCase(), profileMap, 'ghost');
}

/**
 * Get badge class for sponsor tier
 */
export function getSponsorTierBadgeClass(tier: string): string {
  const tierMap: Record<string, string> = {
    platinum: 'primary',
    gold: 'warning',
    silver: 'ghost',
    bronze: 'accent',
    community: 'info',
  };

  return getBadgeClass(tier.toLowerCase(), tierMap, 'ghost');
}
