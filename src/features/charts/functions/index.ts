import { CandleStickData, OHLCV } from "../types";

export const candlesticks = (
  data: Array<OHLCV>,
  base = 10 ** 2
): Array<CandleStickData> => {
  return data.map((item) => {
    return {
      x: new Date(item.timestamp),
      y: [
        Math.floor(item.open * base) / base,
        Math.floor(item.high * base) / base,
        Math.floor(item.low * base) / base,
        Math.floor(item.close * base) / base,
      ],
    };
  });
};
