import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./admin/app-sidebar";
import { useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { XCircleIcon } from "lucide-react";

export default function DashboardLayout({ children }) {
    const { flash } = usePage().props;

    useEffect(() => {
        flash.type &&
            toast(flash.message, {
                type: flash.type,
                duration: 2500,
                action: {
                    label: <XCircleIcon className="h-4 w-4 shrink-0" />,
                    onClick: () => toast.dismiss(),
                },
            });
    }, [flash]);

    return (
        <SidebarProvider>
            <Toaster />

            <AppSidebar variant="inset" />

            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}
