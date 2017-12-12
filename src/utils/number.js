import BigNumber from 'bignumber.js';
const mynumber = new BigNumber(1000000000000000000, 10);

export const toBither = (number) => {
  const bignumber = new BigNumber(number);
  return bignumber.dividedBy(mynumber).toFixed();
}

