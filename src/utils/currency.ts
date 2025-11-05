/**
 * Format salary range based on currency
 */
export function formatSalary(salary: {
  min: number;
  max: number;
  currency: string;
  period: string;
}): string {
  const { min, max, currency } = salary;

  if (currency === 'INR') {
    if (min >= 100000) {
      const minL = (min / 100000).toFixed(min % 100000 === 0 ? 0 : 1);
      const maxL = (max / 100000).toFixed(max % 100000 === 0 ? 0 : 1);
      return `₹${minL}L-${maxL}L`;
    }
    return `₹${min / 1000}K-${max / 1000}K`;
  }

  if (currency === 'USD') return `$${min / 1000}K-${max / 1000}K`;
  if (currency === 'EUR') return `€${min / 1000}K-${max / 1000}K`;

  return `${currency} ${min / 1000}K-${max / 1000}K`;
}
