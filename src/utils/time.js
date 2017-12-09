export const unixTimeToHumanReadableTime = (unixtime) => {
  const date = new Date(unixtime * 1000);
  console.log(date)
  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
}
