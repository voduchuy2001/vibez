import { SiteHeader } from "@/layouts/admin/site-header";
import AdminLayout from "@/layouts/admin-layout";
import { Head } from "@inertiajs/react";

export default function Index() {
    const breadcrumbs = [{ label: "Dashboard" }];

    return (
        <AdminLayout>
            <Head title="Dashboard" />
            <SiteHeader breadcrumbs={breadcrumbs} />
        </AdminLayout>
    );
}
