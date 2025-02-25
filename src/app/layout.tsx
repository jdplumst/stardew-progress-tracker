import "~/styles/globals.css";

import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Stardew Valley Progress Tracker",
  description:
    "Track your Stardew Valley progress across fishing, community center, and museum collections.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
