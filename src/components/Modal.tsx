import { MdClose } from "react-icons/md";

type Props = {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};

export default function Modal({ open, onClose, children }: Props) {
  if (!open) {
    return <></>;
  }

  return (
    <div
      id="modal"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* モーダル */}
      <div className="bg-white min-w-[500px] min-h-[300px] rounded p-2">
        {/* モーダルヘッダー */}
        <div className="flex items-center pb-2">
          <h2 className="flex-1">タイトル</h2>
          <button className="border border-transparent hover:border-current hover:border-slate-100 rounded hover:bg-slate-50" onClick={onClose}>
            <MdClose size={24} />
          </button>
        </div>
        <div>
          {children}
        </div>
        {/* フッター */}
        <div></div>
      </div>
    </div>
  );
}
