import Chart from "react-apexcharts";
import { candlesticks } from "../functions";
import { getUrl } from "../../api/function";
import { useFetchData } from "../../api/hooks";
import { HistoricalData } from "../types";

const createChartData = (response) => {
  const options = {
    chart: {
      type: "line",
      height: "80%",
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
      name: "hoge",
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

  return {
    options,
    series,
  };
};

type Props = {
  data?: any; // TODO
};

export default function CandlestickChartView({ data }: Props) {
  if (data === null) {
    return <></>;
  }
  const { options, series } = createChartData(data);

  return (
    <div className="h-full">
      <div className="pt-2 pb-1">
        <label className="mr-2">期間</label>
        <select className="bg-slate-200 p-1 rounded-lg">
          <option value="">yyyy-hh-mm HH:MM</option>
        </select>
        <span>〜</span>
        <select className="bg-slate-200 p-1 rounded-lg">
          <option value="">yyyy-hh-mm HH:MM</option>
        </select>
      </div>
      <Chart
        type="line"
        series={series}
        options={options}
        width="100%"
        height="80%"
      />
    </div>
  );
}
