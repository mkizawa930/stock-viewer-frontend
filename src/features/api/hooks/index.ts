import { useEffect, useMemo, useState } from "react";

export const useData = <T>(url: string): { data: T | null } => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setData(json);
    };
    fetchData();
  }, [url]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData };
};
