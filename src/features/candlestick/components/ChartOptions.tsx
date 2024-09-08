import { MdClose } from "react-icons/md";
import { INDICATORS } from "../types";

export default function ChartOptions() {
  return (
    <div className="w-full">
      <div className="">
        <h1 className="p-2">Chart Options</h1>

        <div className="flex space-x-2 p-2">
          <label htmlFor="candlestick-interval">間隔</label>
          <select id="candlestick-interval">
            <option>1d</option>
          </select>
          <label htmlFor="candlestick-period">期間</label>
          <select id="candlestick-interval">
            <option>1mo</option>
            <option>6mo</option>
            <option>1y</option>
            <option>5y</option>
          </select>
        </div>

        <ul>
          <li className="w-[400px]">
            <div className="flex items-center p-2">
              <button className="hover:bg-slate-100 p-1">
                <MdClose />
              </button>
              <select>
                {INDICATORS.map((name) => (
                  <option value={name}>{name}</option>
                ))}
              </select>
              <input type="number" className="" />
              <label>期間</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
