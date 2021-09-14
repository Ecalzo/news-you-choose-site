export function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  let day;
  // We update data at 10 UTC, daily.
  if (now.getUTCHours() < 10) {
    day = now.getUTCDate() - 1;
  } else {
    day = now.getUTCDate();
  }
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  return year + "-" + month + "-" + `${day}`.padStart(2, "0");
}
