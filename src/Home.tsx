import CandlestickChart from "./features/candlestick/components/CandlestickChart";

export default function Home() {
  return (
    <div className="h-full w-full">
      <CandlestickChart />
    </div>
  );
}

// const series = [
//   {
//     name: "series-1",
//     data: [
//       {
//         x: new Date(1538778600000),
//         y: [6629.81, 6650.5, 6623.04, 6633.33],
//       },
//       {
//         x: new Date(1538780400000),
//         y: [6632.01, 6643.59, 6620, 6630.11],
//       },
//       {
//         x: new Date(1538782200000),
//         y: [6630.71, 6648.95, 6623.34, 6635.65],
//       },
//       {
//         x: new Date(1538784000000),
//         y: [6635.65, 6651, 6629.67, 6638.24],
//       },
//     ],
//   },
// ];
