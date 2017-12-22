export default function HashRateTransformer(hashrate) {
  if (hashrate < 1000) {
    return hashrate;
  }

  let i = 0;
  let units = ['KH', 'MH', 'GH', 'TH', 'PH'];
  while (hashrate > 1000) {
    hashrate = hashrate / 1000;
    i++;
  }

  return `${Math.round(hashrate * 100) / 100} ${units[i - 1]}`;
}
