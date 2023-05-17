import Chat from "@/components/chat";
import Layout from "@/components/layout";
import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-4 px-4 py-10">
        <Chat message="Hi how much are you selling them for?" />

        <Chat message="I want $20,000" reverse />

        <Chat message="미쳤어" />

        <div className="insex-x-0 fixed bottom-2 mx-auto w-full max-w-md">
          <div className="relative flex items-center">
            <input
              type="text"
              className="border-gary-300 w-full rounded-full pr-12 
            shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <button
                className="flex cursor-pointer items-center rounded-full bg-orange-500 px-3 text-sm 
            text-white hover:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChatDetail;
