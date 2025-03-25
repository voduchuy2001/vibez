import { SiteHeader } from "@/layouts/admin/site-header";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";

export default function Index() {
    const breadcrumbs = [{ label: "Dashboard" }];

    return (
        <DashboardLayout>
            <Head title="Dashboard" />
            <SiteHeader breadcrumbs={breadcrumbs} />
        </DashboardLayout>
    );
}
