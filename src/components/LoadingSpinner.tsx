
type Props = {
  size: number;
}

export default function Spinner({size = 5}: Props) {

  return (
    <div className="flex justify-center">
      <div className={[`w-4 h-4`, "animate-spin border-2 border-white-500 rounded-full border-t-transparent",
      ].join(" ")}></div>
    </div>
  );
}
