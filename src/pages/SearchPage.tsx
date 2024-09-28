import { useState } from "react";
import SearchInputForm from "../features/markets/components/SearchInputForm";
import { MdChevronRight } from "react-icons/md";
import { getUrl } from "../features/api/function";

export default function SearchPage() {
  const [quotes, setQuotes] = useState<Array<any> | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchQuotes = async (queryText: string) => {
    setLoading(true);
    const url = getUrl("/search");
    const query = new URLSearchParams();
    query.append("query", queryText);
    const response = await fetch(`${url}?${query.toString()}`);
    const data = await response.json();
    console.log(data);
    setLoading(false);
    setQuotes(data);
  };

  return (
    <div className="p-12 h-full">
      <div className="flex flex-col h-full">
        <div className="font-md">Search</div>
        <div className="max-w-[900px]">
          <SearchInputForm onSearch={fetchQuotes} />
        </div>
        <div className="flex-1 mt-4">
          {quotes !== null ? (
            loading ? (
              <div>読込中</div>
            ) : (
              <div>
                <div>検索結果一覧</div>
                <ul className="divide-y">
                  {quotes !== null &&
                    quotes.map((item, index) => (
                      <QuoteInfoItem key={index} info={item} />
                    ))}
                </ul>
              </div>
            )
          ) : (
            <div>検索結果がありません</div>
          )}
        </div>
      </div>
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
