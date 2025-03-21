import { SiteHeader } from "@/layouts/admin/site-header";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <Head title="Dashboard" />
            <SiteHeader headerName="Dashboard" />
        </DashboardLayout>
    );
}
