import { Topbar } from "~/components/topbar";

export default function AuthedLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
}
