import FloatingButton from "@/components/floating-button";
import Item from "@/components/item";
import Layout from "@/components/layout";
import { getProfileIfLoggedIn } from "@/libs/server/get-profile";
import Link from "next/link";

export default async function Home() {
  // const user = await getProfileIfLoggedIn();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="my-auto flex flex-col items-center gap-2 *:font-medium">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
      </div>

      <div className="flex w-full flex-col items-center gap-3">
        <Link href="/create-account" className="primary-btn py-2.5 text-lg">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link href="/login" className="hover:underline">
            로그인
          </Link>
        </div>
      </div>
    </div>
    // <Layout title="홈" hasTabBar>
    //   <div className="flex flex-col space-y-5 divide-y py-10">
    //     {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
    //       <Link href={`items/${i}`} key={i}>
    //         <Item />
    //       </Link>
    //     ))}

    //     <FloatingButton>
    //       <svg
    //         className="h-6 w-6"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         aria-hidden="true"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M12 6v6m0 0v6m0-6h6m-6 0H6"
    //         />
    //       </svg>
    //     </FloatingButton>
    //   </div>
    // </Layout>
  );
}
