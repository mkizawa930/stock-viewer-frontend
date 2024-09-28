import LoadingButton from "../../../components/LoadingButton";
import { getUrl } from "../../api/function";
import CandlestickChart from "./CandlestickChart";
import { ChangeEvent, useEffect, useState } from "react";

type FormValues = {
  period: string;
  interval: string;
  symbol: string;
};

export default function CandlestickChartView() {
  const [form, setform] = useState<FormValues>({
    period: "3mo",
    interval: "1d",
    symbol: "^N225",
  });
  const [data, setData] = useState(null);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const body = await response.json();
    return body;
  };

  const validate = (form: FormValues) => {
    if (form.interval === undefined || form.interval === null) {
      return false;
    }

    if (form.period === undefined || form.period === null) {
      return false;
    }
    if (form.symbol === undefined || form.symbol === null) {
      return false;
    }

    return true;
  };

  const handleChangeSearchParam = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    if (validate(form)) {
      const newUrl = getUrl(
        `/markets/${form.symbol}?indicators=SMA_14&indicators=SMA_26&indicators=SMA_50`
      );
      fetchData(newUrl)
        .then((data) => setData(data))
        .catch((e) => {
          console.error(e);
          setData(null);
        });
    }
  };

  useEffect(() => {
    if (validate(form)) {
      const newUrl = getUrl(
        `/markets/${form.symbol}?indicators=SMA_14&indicators=SMA_26&indicators=SMA_50`
      );
      fetchData(newUrl)
        .then((data) => setData(data))
        .catch((e) => {
          console.error(e);
          setData(null);
        });
    }
  }, []);

  return (
    <div className="flex flex-col h-full px-6">
      <div className="text-lg font-bold">Chart</div>
      <div>
        {/* 選択メニュー 期間 間隔 銘柄 */}
        <div className="inline-flex space-x-2 py-4">
          <select
            id="candlestick-interval"
            name="interval"
            className="px-2 py-1 border rounded-lg"
            onChange={handleChangeSearchParam}
            value={form["interval"]}
            required
          >
            <option value={""}>期間</option>
            <option value={"1d"}>1d</option>
          </select>
          <select
            id="candlestick-period"
            name="period"
            className="px-2 py-1 border rounded-lg"
            onChange={handleChangeSearchParam}
            required
            value={form["period"]}
          >
            <option value={""}>期間</option>
            <option value={"1mo"}>1mo</option>
            <option value={"3mo"}>3mo</option>
            <option value={"6mo"}>6mo</option>
            <option value={"1y"}>1y</option>
            <option value={"5y"}>5y</option>
          </select>
          <input
            id="candlestick-symbol"
            name="symbol"
            className="px-2 py-1 border rounded-lg"
            type="text"
            placeholder="Symbol"
            onChange={handleChangeSearchParam}
            value={form["symbol"]}
          />
          <LoadingButton className="border bg-blue-500 text-white" text={"取得"} />
        </div>
      </div>
      {/* <ChartOptions /> */}
      <div className="h-full">
        <CandlestickChart data={data} />
      </div>
    </div>
  );
}
