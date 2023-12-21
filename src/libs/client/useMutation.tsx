import { useState } from "react";

type UseMutationState<T> = {
  loading: boolean;
  data: T | undefined;
  error: any;
};

type UseMutationResult<Data, Result> = [
  (data: Data) => void,
  UseMutationState<Result>
];

export default function useMutation<Data, Result>(
  url: string
): UseMutationResult<Data, Result> {
  const [state, setState] = useState<UseMutationState<Result>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  async function mutation(data?: Data) {
    setState((prev) => ({ ...prev, error: undefined, loading: true }));

    fetch(url, {
      method: "POST",
      body: data && JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setState((prev) => ({ ...prev, data: json })))
      .catch((error) => {
        console.log(error);
        setState((prev) => ({ ...prev, error }));
      })
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }

  return [mutation, state];
}
