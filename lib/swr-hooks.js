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

export function useStats({ date }) {
  const { data, error } = useSWR(`/api/get-data-stats?date=${date}`, fetcher);
  return {
    articles: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useVotes() {
  const { data, error, isValidating, mutate } = useSWR(
    `/api/get-votes-stats`,
    fetcher
  );
  return {
    votes: data,
    isVotesLoading: !error && !data,
    isError: error,
    isValidating: isValidating,
    mutateFunc: mutate,
  };
}
