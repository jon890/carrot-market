import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export default function useUser() {
  const router = useRouter();
  const { data, error } = useSWR("/api/users/me", fetcher);

  return data;
}
