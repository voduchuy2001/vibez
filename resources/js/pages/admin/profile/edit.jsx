import { SiteHeader } from "@/layouts/admin/site-header";
import AdminLayout from "@/layouts/admin-layout";
import { Head, usePage } from "@inertiajs/react";
import UpdateProfileInformationForm from "./partials/update-profile-information-form";
import UpdatePasswordForm from "./partials/update-password-form";
import DeleteUserForm from "./partials/delete-user-form";

export default function Edit() {
    const { auth: user } = usePage().props;
    const breadcrumbs = [
        { href: route("dashboard"), label: "Dashboard" },
        { label: "Profile" },
    ];

    return (
        <AdminLayout>
            <Head title={`Edit Profile: ${user.name}`} />
            <SiteHeader breadcrumbs={breadcrumbs} />

            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                        <div className="px-4 lg:px-6">
                            <UpdateProfileInformationForm className="max-w-xl" />
                        </div>

                        <div className="px-4 lg:px-6">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="px-4 lg:px-6">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
}
