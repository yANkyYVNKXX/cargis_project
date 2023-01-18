import {useEffect, useState} from 'react';

type UseQueryReturn<TData> = {data: TData | undefined; isFetching: boolean}

export const useQuery = <TData>(
  callback: () => Promise<TData | undefined>,
): UseQueryReturn<TData> => {
  const [data, setData] = useState<TData>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    setIsFetching(true);

    callback().then((data) => {
      setData(data);
      setIsFetching(false);
    });
  }, []);

  return {data, isFetching};
};
