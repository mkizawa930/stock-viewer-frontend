import { useState } from "react";
import CandlestickChartView from "../features/charts/components/CandlestickChartView";
import Modal from "../components/Modal";

export default function HomePage() {
  const [symbol, setSymbol] = useState<string>("^IXIC");
  const [open, setOpen] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpen(false);
  }

  return (
    <div className="h-full">
      <CandlestickChartView />
      <Modal open={open} onClose={handleCloseModal} />
    </div>
  );
}
