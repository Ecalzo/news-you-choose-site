export function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  let day;
  // We update data at 10 UTC, daily.
  if (now.getUTCHours() < 10) {
    day = now.getDate() - 1;
  } else {
    day = now.getDate();
  }
  const month = `${now.getMonth() + 1}`.padStart(2, "0");
  return year + "-" + month + "-" + `${day}`.padStart(2, "0");
}
