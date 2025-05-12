export function FormatViews(countStr: string): string {
  const count = Number(countStr);
  if (isNaN(count)) return "Invalid number";

  if (count < 1000) return `${count} view${count !== 1 ? "s" : ""}`;

  const units: [number, string][] = [
    [1e9, "B"],
    [1e6, "M"],
    [1e3, "K"]
  ];

  for (const [value, symbol] of units) {
    if (count >= value) {
      const formatted = (count / value).toFixed(1).replace(/\.0$/, "");
      return `${formatted}${symbol}`;
    }
  }

  return `${count}`;
}
