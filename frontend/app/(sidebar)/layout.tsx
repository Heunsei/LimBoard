import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/features/main/components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <div>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
