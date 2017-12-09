import { unixTimeToHumanReadableTime } from '../utils/time';

export default function(block) {
  return {
    Difficulty: parseInt(block.Difficulty, 16),
    GasLimit: parseInt(block.GasLimit, 16),
    GasUsed: parseInt(block.GasUsed, 16),
    Hash: block.Hash,
    Miner: block.Miner,
    Nonce: block.Nonce,
    Number: parseInt(block.Number, 16),
    Size: parseInt(block.Size, 16),
    Timestamp: unixTimeToHumanReadableTime(parseInt(block.Timestamp, 16))
  };
}
