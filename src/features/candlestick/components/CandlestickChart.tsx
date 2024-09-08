import Chart from "react-apexcharts";
import { getUrl } from "../../api/function";
import { useData } from "../../api/hooks";
import { candlesticks } from "../functions";
import { HistoricalData, IndicatorOption } from "../types";
import ChartOptions from "./ChartOptions";
import { useState } from "react";

export default function CandlestickChart() {
  const symbol = "^IXIC";
  const url = getUrl(
    `/markets/${symbol}?indicators=SMA_14&indicators=SMA_26&indicators=SMA_50`
  );

  const [options, setOptions] = useState<Array<IndicatorOption>>([]);

  const { data: response } = useData<{
    data: HistoricalData[];
    interval: string;
    period: string;
    indicators: string[];
  }>(url);

  if (response === null) {
    return null;
  } else {
    const options = {
      chart: {
        type: "line",
        height: "80%",
      },
      title: {
        text: "Candlestick Chart",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        labels: {
          formatter: (val: number) => {
            return val.toFixed(2);
          },
        },
      },
      stroke: {
        width: [1, 1],
      },
      color: ["#546E7A", "#FF4560"],
      theme: {
        palette: "palette1",
      },
    };

    const series = [
      {
        name: symbol,
        type: "candlestick",
        data: candlesticks(response.data),
      },
      ...response.indicators.map((indicator) => {
        return {
          name: indicator,
          type: "line",
          data: response.data.map((item) => {
            return {
              x: item.timestamp,
              y: item[indicator],
            };
          }),
        };
      }),
    ];
    console.log(series);

    return (
      <div className="flex flex-col h-full px-12">
        <div className="text-lg p-2 font-bold">Chart</div>
        <ChartOptions />
        <div className="h-full">
          <Chart
            type="line"
            series={series}
            options={options}
            width="100%"
            height="80%"
          />
        </div>
      </div>
    );
  }
}
