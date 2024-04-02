import { classnames } from "@/libs/client/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | Karrot Market",
    default: "Karrot Market",
  },
  description: "Sell and buy all the things!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={classnames(
          inter.className,
          "mx-auto w-screen bg-neutral-900 text-white",
        )}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
