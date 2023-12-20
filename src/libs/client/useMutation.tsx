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

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data && JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseBody = await response.json();
      setState((prev) => ({ ...prev, data: responseBody }));
    } catch (e) {
      setState((prev) => ({ ...prev, error: e }));
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  }

  return [mutation, state];
}
