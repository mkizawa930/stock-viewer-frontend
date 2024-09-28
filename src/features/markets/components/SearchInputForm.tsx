import { ChangeEventHandler, FormEvent, useState } from "react";
import { MdClose } from "react-icons/md";

/**
 * 株価検索用の入力フォーム
 * @param onSearch 検索時のアクション
 * @returns 
 */
export default function SearchInputForm({
  onSearch,
}: {
  onSearch: (text: string) => void;
}) {
  const [queryText, setQueryText] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value;
    setQueryText(value);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (queryText === undefined || queryText === "") {
      // TODO: error
      return;
    }
    console.log("clicked");
    onSearch(queryText);
  };

  const onClickClearButton = () => {
    setQueryText("");
  };

  return (
    <form className="flex" onSubmit={onSubmit}>
      <div className="flex-1 flex items-center border border-slate-300 rounded-xl px-2">
        <input
          className="flex-1 p-2 outline-none"
          type="text"
          value={queryText}
          onChange={handleChange}
        />
        <button
          className="rounded-full text-black disabled:text-slate-300"
          disabled={queryText === null || queryText === ""}
          onClick={onClickClearButton}
        >
          <MdClose size={24} />
        </button>
      </div>
      <button className="bg-sky-500 border text-white px-4 py-1 rounded-xl ml-4">
        検索
      </button>
    </form>
  );
}
