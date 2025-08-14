// Returns the percentage of pity based on current and maximum values
// Example: calculatePity(45, 90) returns "50.00%"
export function calculatePity(current: number, max: number): string {
  if (current < 0 || max <= 0) {
    return "Invalid pity values";
  }
  
  const percentage = (current / max) * 100;
  
  return `${percentage.toFixed(2)}%`;
}