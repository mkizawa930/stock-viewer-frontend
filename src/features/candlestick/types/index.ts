export const INDICATORS = ["SMA", "EMA"];

export type OHLCV = {
  timestamp: Date;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
};

export type HistoricalData = OHLCV & {
  [key: string]: number;
};

export type CandleStickData = {
  x: Date;
  y: number[];
};

export type Indicator = typeof INDICATORS;

export type IndicatorOption = {
  name: Indicator;
  term: number;
};
