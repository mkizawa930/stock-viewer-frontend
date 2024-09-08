import { ChangeEventHandler, FormEvent, useState } from "react";
import { getUrl } from "../../api/function";

export default function SearchInputForm({
  onSearch,
}: {
  onSearch: (data: any) => void;
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
    const url = getUrl("/search");
    const query = new URLSearchParams();
    query.append("query", queryText);
    const response = await fetch(`${url}?${query.toString()}`);
    const data = await response.json();

    onSearch(data);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={queryText} onChange={handleChange} />
      <button>検索</button>
    </form>
  );
}
