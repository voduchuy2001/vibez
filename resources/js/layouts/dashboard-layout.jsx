import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./admin/app-sidebar";
import { SiteHeader } from "./admin/site-header";

export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
