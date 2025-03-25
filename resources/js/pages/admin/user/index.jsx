import { SiteHeader } from "@/layouts/admin/site-header";
import AdminLayout from "@/layouts/admin-layout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function index() {
    const breadcrumbs = [
        { href: route("dashboard"), label: "Dashboard" },
        { label: "Users" },
    ];

    return (
        <AdminLayout>
            <Head title="Users" />
            <SiteHeader breadcrumbs={breadcrumbs} />

            <div className="flex flex-1 flex-col"></div>
        </AdminLayout>
    );
}
