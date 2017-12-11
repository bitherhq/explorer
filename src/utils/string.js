export function sliceString(string, length = 20) {
  return string.length > length ? `${string.slice(0, length)}...` : string;
}
