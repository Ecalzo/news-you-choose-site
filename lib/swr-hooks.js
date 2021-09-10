import useSWR from "swr";

function fetcher(url) {
  return window.fetch(url).then((res) => res.json());
}

export function useArticles({ sentiment, date }) {
  const { data, error } = useSWR(
    `/api/get-some-entries?sentiment=${sentiment}&date=${date}`,
    fetcher
  );
  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useStats({ sentiment, date}) {
  const { data, error } = useSWR(
    `/api/get-data-stats?date=${date}`,
    fetcher
  );
  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
}
