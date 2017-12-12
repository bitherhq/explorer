import { unixTimeToHumanReadableTime } from '../utils/time';
import { toBither } from '../utils/number';
import { currency } from '../constants/numbers';

export default function(transaction) {
  return {
    Hash: transaction.Hash,
    From: transaction.From,
    To: transaction.To,
    Value: `${toBither(transaction.Value)} ${currency}`,
    Timestamp: unixTimeToHumanReadableTime(parseInt(transaction.Timestamp, 16)),
    BlockNumber: parseInt(transaction.BlockNumber, 16),
    Gas: parseInt(transaction.Gas, 16),
    GasPrice: parseInt(transaction.GasPrice, 16),
    Input: transaction.Input,
    Nonce: transaction.Nonce,
    TransactionIndex: parseInt(transaction.TransactionIndex, 16),
    'TxReceipt Status': 'true'
  };
}
