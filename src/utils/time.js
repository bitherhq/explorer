export const unixTimeToHumanReadableTime = (unixtime) => {
  const date = new Date(unixtime * 1000);
  const minutes = date.getMinutes() === 1 ? "0" + date.getMinutes() : date.getMinutes();

  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  + " " + date.getHours() + ":" + minutes;
}
