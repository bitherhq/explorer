export const unixTimeToHumanReadableTime = (unixtime) => {
  const date = new Date(unixtime * 1000);
  const minutes = date.getMinutes() <= 1 ? "0" + date.getMinutes() : date.getMinutes();
  const seconds = date.getSeconds() <= 1 ? "0" + date.getSeconds() : date.getSeconds();
  console.log(date.getSeconds(), seconds)
  return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
  + " " + date.getHours() + ":" + minutes + ":" + seconds;
}
