import { SiteHeader } from "@/layouts/admin/site-header";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";

export default function index() {
    return (
        <DashboardLayout>
            <Head title="Setting" />
            <SiteHeader headerName="Setting" />

            <div className="flex flex-1 flex-col"></div>
        </DashboardLayout>
    );
}
