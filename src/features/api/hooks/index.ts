import { useEffect, useMemo, useState } from "react";

export const useFetchData = <T>(
  url: string
): { data: T | null; loading: boolean } => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      setData(json);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  const memoizedData = useMemo(() => data, [data]);

  return { data: memoizedData, loading };
};
