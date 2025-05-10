import Link from "next/link";
import { AppSidebar } from "~/components/app-sidebar";
import { Topbar } from "~/components/topbar";
import { Button } from "~/components/ui/button";
import { SidebarProvider } from "~/components/ui/sidebar";

export default async function SidebarLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <SidebarProvider>
      <AppSidebar farmId={id} />
      <main className="w-full">
        <Topbar />
        <div className="p-6">
          <div className="mx-auto flex max-w-6xl flex-col gap-6">
            <Link href="/farms">
              <Button variant="outline">← Back to Farms</Button>
            </Link>
            {children}
          </div>
        </div>
      </main>
    </SidebarProvider>
  );
}
