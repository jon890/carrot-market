import { useState } from "react";

type UseMutationState<T> = {
  loading: boolean;
  data: T | undefined;
  error: any;
};

type UseMutationResult<T> = [(data: any) => void, UseMutationState<T>];

export default function useMutation<T = any>(
  url: string
): UseMutationResult<T> {
  const [state, setState] = useState<UseMutationState<T>>({
    loading: false,
    data: undefined,
    error: undefined,
  });

  async function mutation(data?: any) {
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
