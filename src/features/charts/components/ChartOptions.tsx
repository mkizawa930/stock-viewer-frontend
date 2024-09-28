import { MdAdd, MdClose } from "react-icons/md";
import { INDICATORS } from "../types";

export default function ChartOptions() {
  const Option = ({ value }: { value: string }) => {
    return (
      <option className="" value={value}>
        {value}
      </option>
    );
  };

  return (
    <div className="w-full">
      <div className="">
        <div className="mt-4 mb-8">
          <div className="font-bold">Indicators</div>
          <ul className="my-2 space-y-2 max-w-[400px]">
            <li className="">
              <div className="flex items-center p-2 space-x-2">
                <button className=" hover:bg-slate-100 p-1 rounded">
                  <MdClose size={20} />
                </button>
                <select className="border px-2 py-1 rounded bg-gray-100">
                  {INDICATORS.map((name) => (
                    <option value={name}>{name}</option>
                  ))}
                </select>
                <input
                  className="px-2 py-1 border rounded outline-none"
                  type="number"
                />
                <label>期間</label>
              </div>
            </li>
            {/* <li>
              <div className="flex items-center justify-center p-2">
                <button className="flex items-center bg-blue-500 text-white rounded px-2 py-1.5">
                  <MdAdd />
                  <span>追加</span>
                </button>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
