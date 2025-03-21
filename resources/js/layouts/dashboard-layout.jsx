import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./admin/app-sidebar";
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }) {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" />
            <SidebarInset>{children}</SidebarInset>
            <Toaster position="bottom-right" />
        </SidebarProvider>
    );
}
