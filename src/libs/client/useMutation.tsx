import { useState } from "react";

export default function useMutation(
  url: string
): [
  (data?: any) => Promise<void>,
  { loading: boolean; data: undefined | any; error: undefined | any }
] {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  async function mutation(data?: any) {
    setError(undefined);
    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: data && JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const responseBody = await response.json();
      setData(responseBody);
    } catch (e) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return [mutation, { loading, data, error }];
}
