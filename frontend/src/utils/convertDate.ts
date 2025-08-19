export function convertDate(date: Date): string  {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    // Localize timezone to user's timezone
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone, 
  };

  return date.toLocaleString('en-US', options);
}

export function convertDateWithoutTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return date.toLocaleDateString('en-US', options);
}