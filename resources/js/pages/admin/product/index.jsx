import { SiteHeader } from "@/layouts/admin/site-header";
import DashboardLayout from "@/layouts/dashboard-layout";
import { Head } from "@inertiajs/react";
import React from "react";
import DataTable from "./partials/data-table";

export default function index() {
    const breadcrumbs = [
        { href: route("dashboard"), label: "Dashboard" },
        { label: "Products" },
    ];

    return (
        <DashboardLayout>
            <Head title="Product" />
            <SiteHeader breadcrumbs={breadcrumbs} />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="px-4 lg:px-6">
                            <DataTable />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}
