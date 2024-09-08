import { useState } from "react";
import SearchInputForm from "../features/markets/components/SearchInputForm";
import { MdChevronRight } from "react-icons/md";

export default function SearchPage() {
  const [quotes, setQuotes] = useState<Array<any> | null>(null);

  const onSearch = (data: Array<any>) => {
    console.log(data);
    setQuotes(data);
  };

  return (
    <div>
      <div>Search</div>
      <SearchInputForm onSearch={onSearch} />
      <div>検索結果一覧</div>
      <ul className="divide-y">
        {quotes !== null &&
          quotes.map((item, index) => (
            <QuoteInfoItem key={index} info={item} />
          ))}
      </ul>
    </div>
  );
}

const QuoteInfoItem = ({ info }) => {
  return (
    <div className="w-full flex items-center p-4 hover:bg-slate-100 hover:cursor-pointer">
      <div className="flex-1 ml-4">
        <span>
          {info.shortname}({info.symbol})
        </span>
      </div>
      <div>
        <MdChevronRight size={20} />
      </div>
    </div>
  );
};
