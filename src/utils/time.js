export const unixTimeToHumanReadableTime = (unixtime) => {
  const date = new Date(unixtime);
  return date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay();
}
