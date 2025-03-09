import { AppSidebar } from "~/components/app-sidebar";
import { Topbar } from "~/components/topbar";
import { SidebarProvider } from "~/components/ui/sidebar";

export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Topbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
