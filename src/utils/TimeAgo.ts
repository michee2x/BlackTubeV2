export function TimeAgo(dateStr: string): string {
  const date = new Date(dateStr.trim());
  const now = new Date();
  const diff = Math.floor((now.getTime() - date.getTime()) / 1000); // in seconds

  if (diff < 5) return "now";

  const units: [number, string][] = [
    [60, "sec"],            // 60 seconds = 1 minute
    [60, "min"],            // 60 minutes = 1 hour
    [24, "hr"],             // 24 hours = 1 day
    [7, "day"],             // 7 days = 1 week
    [4.34524, "wk"],        // ~4.35 weeks = 1 month
    [12, "mo"],             // 12 months = 1 year
    [Infinity, "yr"]        // years go on
  ];

  let time = diff;
  for (let i = 0; i < units.length; i++) {
    if (time < units[i][0]) {
      const value = Math.floor(time);
      const label = units[i][1];
      return `${value} ${label}${value !== 1 ? "s" : ""} ago`;
    }
    time /= units[i][0];
  }

  return "a while ago";
}
