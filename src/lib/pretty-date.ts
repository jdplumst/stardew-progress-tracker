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
  const monthIdx = date.getMonth();
  const month = months[monthIdx];
  const day = date.getDate();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formatedMinutes =
    minutes > 10 ? minutes : minutes > 1 ? minutes + 10 : minutes;

  return `${month} ${day}, ${year} at ${hours % 12}:${minutes.toString().length >= 2 ? minutes : "0" + minutes}${hours >= 12 ? "pm" : "am"}`;
}
