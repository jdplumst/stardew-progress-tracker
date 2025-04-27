export function prettyDate(date: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIdx = date.getUTCMonth();
  const month = months[monthIdx];
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();

  return `${month} ${day}, ${year}`;
}
