import { SiteHeader } from "@/layouts/admin/site-header";
import AdminLayout from "@/layouts/admin-layout";
import { Head } from "@inertiajs/react";

export default function index() {
    return (
        <AdminLayout>
            <Head title="Setting" />
            <SiteHeader headerName="Setting" />

            <div className="flex flex-1 flex-col"></div>
        </AdminLayout>
    );
}
