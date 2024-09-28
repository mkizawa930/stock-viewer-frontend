import { useState } from "react";
import CandlestickChartView from "../features/charts/components/CandlestickChartView";

export default function HomePage() {
  const [symbol, setSymbol] = useState<string>("^IXIC");

  return (
    <div className="h-full">
      <CandlestickChartView />
    </div>
  );
}
