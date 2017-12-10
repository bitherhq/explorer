import { unixTimeToHumanReadableTime } from '../utils/time';

export default function(block) {
  return {
    Hash: block.Hash,
    Miner: block.Miner,
    Difficulty: parseInt(block.Difficulty, 16),
    GasLimit: parseInt(block.GasLimit, 16),
    GasUsed: parseInt(block.GasUsed, 16),
    Nonce: block.Nonce,
    Number: parseInt(block.Number, 16),
    Size: parseInt(block.Size, 16),
    Timestamp: unixTimeToHumanReadableTime(parseInt(block.Timestamp, 16))
  };
}
