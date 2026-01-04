// Utility functions for MAB AI Strategies

/**
 * Conditionally join classNames together
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num);
}

/**
 * Calculate ROI based on input parameters
 */
export function calculateROI(params: {
  employees: number;
  hoursSaved: number;
  avgSalary: number;
}) {
  const { employees, hoursSaved, avgSalary } = params;
  const hourlyRate = avgSalary / 2080; // 52 weeks * 40 hours
  const weeklySavings = employees * hoursSaved * hourlyRate;
  const annualSavings = weeklySavings * 52;

  return {
    weekly: weeklySavings,
    annual: annualSavings,
    efficiencyBoost: 42, // MAB benchmark
  };
}

/**
 * Debounce function for performance optimization
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
