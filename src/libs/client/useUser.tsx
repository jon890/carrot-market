import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSWR from "swr";

export default function useUser() {
  const router = useRouter();
  const { data, error, isLoading, isValidating, mutate } =
    useSWR("/api/users/me");

  useEffect(() => {
    if (!data.ok) {
      router.replace("/enter");
    }
  }, [router, data]);

  return { user: data?.profile, isLoading };
}
