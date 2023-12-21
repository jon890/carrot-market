import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useUser() {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch("/api/users/me")
      .then((response) => response.json())
      .then((data) => {
        if (!data.ok) {
          return router.push("/enter");
        } else {
          setUser(data.profile);
        }
      });
  });

  return user;
}
