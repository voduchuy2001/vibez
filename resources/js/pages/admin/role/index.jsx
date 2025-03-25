import { SiteHeader } from "@/layouts/admin/site-header";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function index() {
    const breadcrumbs = [
        { href: route("dashboard"), label: "Dashboard" },
        { label: "Roles" },
    ];

    return (
        <DashboardLayout>
            <Head title="Role" />
            <SiteHeader breadcrumbs={breadcrumbs} />

            <div className="flex flex-1 flex-col"></div>
        </DashboardLayout>
    );
}
