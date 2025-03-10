import { AppSidebar } from "~/components/app-sidebar";
import { Topbar } from "~/components/topbar";
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
        {children}
      </main>
    </SidebarProvider>
  );
}
